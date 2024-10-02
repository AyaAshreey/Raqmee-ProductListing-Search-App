<template>

    <div class="container mx-auto p-6">

        <div class=" flex flex-col gap-4 sm:flex-row justify-between items-center mb-10">
            <div class="search relative w-full sm:w-1/3">
                <div class="relative  ">
                    <input type="text" name="price" id="price"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                        placeholder="Search" v-model="searchQuery" @input="searchProducts">
                    <svg style="
                  position: absolute;
                  right: 10px;
                  top: 78%;
                  transform: translateY(-100%);
                " width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.1123 17.5L13.1123 12.5M14.779 8.33333C14.779 11.555 12.1673 14.1667 8.94564 14.1667C5.72398 14.1667 3.1123 11.555 3.1123 8.33333C3.1123 5.11167 5.72398 2.5 8.94564 2.5C12.1673 2.5 14.779 5.11167 14.779 8.33333Z"
                            stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>
            <!-- =====================dropdown======================== -->
            <div class=" flex justify-between items-center gap-2 md:gap-5 sm:gap-2">
                <p class="font-normal text-sm">Sort by</p>
                <div class="relative inline-block text-left">

                    <select
                        class="inline-flex w-full justify-center gap-x-1.5 rounded px-4 py-2 bg-white font-normal text-[#737373] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        v-model="selectedSort" @change="sortProducts">

                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>

                </div>
                <!-- ========button add item========= -->
                <button @click="showAlert"
                    class="relative flex justify-between items-center gap-2 bg-[#D9F99D] px-4 py-2 rounded ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99967 3.33337V16.6667M16.6663 10L3.33301 10" stroke="#171717" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Sell item
                </button>

            </div>
        </div>
        <!-- =========================Swiper Cards============================== -->
        <div class="relative">
            <swiper :modules="modules" :space-between="20" :pagination="pagination" :navigation="navigation"
                :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }
                }">
                <swiper-slide v-for="product in filteredProducts" :key="product.id">
                    <div class="card">
                        <div>
                            <img :src="product.image" alt="" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex justify-between mt-2">
                            <div>
                                <p>{{ product.title }}</p>
                                <p class="font-semibold">£{{ product.price }}</p>
                                <div class="flex justify-start gap-2">
                                    <img src="Rectangle.png" alt="">
                                    <p>Josie Parker</p>
                                </div>
                            </div>
                            <div
                                class="heartIcon rounded border-solid border-2 w-8 h-8 flex justify-center items-center">
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.53487 2.52572C1.07041 3.99018 1.07041 6.36455 2.53487 7.82902L8.93657 14.2307L15.3382 7.82902C16.8026 6.36455 16.8026 3.99018 15.3382 2.52572C13.8737 1.06125 11.4993 1.06125 10.0349 2.52572L8.93657 3.62411L7.83817 2.52572C6.37371 1.06125 3.99934 1.06125 2.53487 2.52572Z"
                                        stroke="#171717" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div v-if="filteredProducts.length === 0" class="text-center text-gray-500 mt-8">
                    No products available.
                </div>

            </swiper>

            <!-- Pagination and Navigation Container under Swiper -->
            <div class="pagination-container flex justify-center items-center gap-2.5 mt-20">
            </div>

            <div class="swiper-button-prev w-fit">

                <svg class="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 15.8333L2.5 9.99996M2.5 9.99996L8.33333 4.16663M2.5 9.99996L17.5 9.99996"
                        stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Previous
            </div>
            <swiper-pagination class="swiper-pagination"></swiper-pagination>
            <div class="swiper-button-next w-fit"> Next
                <svg class="ml-3" width="18" height="14" viewBox="0 0 18 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 1.16663L16.5 6.99996M16.5 6.99996L10.6667 12.8333M16.5 6.99996L1.5 6.99996"
                        stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>


        </div>


        <!-- =====================popup================ -->
        <div v-if="alertVisible"
            class="custom-alert z-10 fixed top-1/2 left-1/2 w-11/12 max-h-screen bg-white rounded overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 p-5 sm:w-3/4 lg:w-2/4">
            <div>
                <p class="font-medium text-2xl"> Sell an item </p>
                <svg class=" absolute top-6 right-2 cursor-pointer" @click="hideAlert" width="20" height="21"
                    viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15.2712L15 5.27124M5 5.27124L15 15.2712" stroke="#171717" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <form @submit.prevent="addProduct">
                <div class="mt-5 overflow-y-auto">
                    <p class="text-sm">Upload photos</p>
                    <div class="flex justify-center items-center rounded border w-full h-48 mb-3">
                        <input type="file" id="uploadBtn" name="file" ref="fileInput" class="hidden"
                            @change="handleImageUpload">
                        <label for="uploadBtn" class="cursor-pointer w-1/4 border px-5 py-3 border-[#D9F99D] rounded  ">
                            Upload Photo </label>
                    </div>
                    <div class="mb-3">
                        <p class="text-sm"> Title </p>
                        <input type="text" class="border w-full rounded py-2" v-model="newProduct.title">

                    </div>
                    <div class="mb-3">
                        <p class="text-sm"> Describe your item </p>
                        <textarea class="w-full border rounded h-48" v-model="newProduct.description"></textarea>
                    </div>
                    <div class="mb-3">
                        <p class="text-sm"> Category </p>
                        <select
                            class="inline-flex w-full justify-center gap-x-1.5 rounded px-6 py-4  bg-white text-sm font-normal text-[#737373] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            v-model="newProduct.category">
                            <option>Pants</option>
                            <option>Shirts</option>
                            <option>jacket</option>
                            <option>hoodie</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <p class="text-sm"> Item Price </p>
                        <input type="text" placeholder="£" class="custom-placeholder border w-full rounded py-2"
                            v-model="newProduct.price">

                    </div>
                    <div class="mb-3">

                        <button class=" w-full rounded py-3 px-6 bg-[#D9F99D] text-sm font-normal"> Upload
                            Item</button>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// localStorage.removeItem('id', '1727298785482');
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";

export default {
    setup() {
        return {
            modules: [Pagination, Navigation],
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                clickable: true,
                renderCustom: function (swiper, current, total) {
                    let paginationHTML = '';

                    if (total <= 5) {

                        for (let i = 1; i <= total; i++) {
                            if (i === current) {
                                paginationHTML += `<span class="pagination-number active">${i}</span>`;
                            } else {
                                paginationHTML += `<span class="pagination-number">${i}</span>`;
                            }
                        }
                    } else {

                        if (current > 2) {
                            paginationHTML += `<span class="pagination-number">1</span>`;
                            if (current > 3) {
                                paginationHTML += `<span class="pagination-ellipsis">...</span>`;
                            }
                        }

                        for (let i = Math.max(1, current - 1); i <= Math.min(total, current + 1); i++) {
                            if (i === current) {
                                paginationHTML += `<span class="pagination-number active">${i}</span>`;
                            } else {
                                paginationHTML += `<span class="pagination-number">${i}</span>`;
                            }
                        }

                        if (current < total - 1) {
                            if (current < total - 2) {
                                paginationHTML += `<span class="pagination-ellipsis">...</span>`;
                            }
                            paginationHTML += `<span class="pagination-number">${total}</span>`;
                        }
                    }

                    return paginationHTML;
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
            }
        };
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            alertVisible: false,
            show: false,
            newProduct: {
                title: '',
                description: '',
                category: '',
                price: '',
                image: '',
            },


            products: [],
            filteredProducts: [],
            searchQuery: '',
            selectedSort: ''
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        showAlert() {
            this.alertVisible = true;
        },
        hideAlert() {
            this.alertVisible = false;
        },
        // handle Image Upload in form
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.newProduct.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        // Add Product Function 
        addProduct() {
            if (!this.newProduct.title || !this.newProduct.description || !this.newProduct.category || !this.newProduct.price || !this.newProduct.image) {
                alert('All fields are required');
                return;
            }

            let products = JSON.parse(localStorage.getItem('products')) || [];

            const productWithId = {
                ...this.newProduct,
                id: Date.now()
            };

            products.push(productWithId);
            localStorage.setItem('products', JSON.stringify(products));
            this.resetForm();
        },
        resetForm() {
            this.newProduct = {
                title: '',
                description: '',
                category: '',
                price: '',
                image: ''
            };
            this.$refs.fileInput.value = '';
        },
        // Load products from localStorage
        loadProducts() {
            const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            this.products = storedProducts;
            this.filteredProducts = storedProducts; // Initially show all products
            this.sortProducts();
        },

        // Sort products by name or price
        sortProducts() {
            if (this.selectedSort === 'name-asc') {
                this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            } else if (this.selectedSort === 'name-desc') {
                this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            } else if (this.selectedSort === 'price-low') {
                this.filteredProducts.sort((a, b) => a.price - b.price);
            } else if (this.selectedSort === 'price-high') {
                this.filteredProducts.sort((a, b) => b.price - a.price);
            }
        },
        // Search products by title or category
        searchProducts() {
            if (this.searchQuery.trim() === '') {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter((product) =>
                    product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            this.sortProducts();
        },

        // Remove a product from localStorage
        removeProduct(productId) {

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products = products.filter(product => product.id !== productId);
            localStorage.setItem('products', JSON.stringify(products));
            this.loadProducts();
        },


    },
}

</script>

<style scoped>
.custom-alert {
    box-shadow: 0px 0px 10px #00000080;
}

.swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    cursor: pointer;
}

.swiper-button-prev,
.swiper-button-next {
    font-size: 16px;
    color: #171717;
    cursor: pointer;
    position: absolute;
    /* top: 503px; */
    top: 50%;
    width: fit-content
}

.swiper-button-next::after,
.swiper-rtl,
.swiper-button-prev::after {
    content: 'next';
    display: none;
}

@media (min-width: 768px) {

    .swiper-button-prev,
    .swiper-button-next {
        top: 490px;
    }
}

@media (min-width: 1024px) {

    .swiper-button-prev,
    .swiper-button-next {
        top: 433px;
    }
}

@media (min-width: 1536px) {

    .swiper-button-prev,
    .swiper-button-next {
        top: 495px;
    }
}


@media (max-width: 768px) {

    .swiper-button-prev,
    .swiper-button-next {
        display: none;
    }
}
</style>