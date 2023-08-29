<template>
    <div class="container">
        <div class="header">
            <Header />
        </div>

        <div class="sidebar">
            <Sidebar />
        </div>

        <div class="upload-content">
            <div class="preview">
                <img v-if="item.imageUrl" :src="item.imageUrl" />
            </div>
            <input type="file" accept="image/*" @change="onChange" />
        </div>

        <div class="footer">
            <Footer />
            
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Sidebar from '../components/Sidebar.vue'
    import Footer from '../components/Footer.vue'

    export default {
        components: {
            Header,
            Sidebar,
            Footer
        },
        name: 'imageUpload',
        data() {
            return {
                item:{
                    //...
                    image : null,
                    imageUrl: null
                }
            }
        },
        methods: {
            onChange(e) {
                const file = e.target.files[0]
                this.image = file
                this.item.imageUrl = URL.createObjectURL(file)
            }
        }
    }
</script>

<style scoped>

    * {
        /* padding: 0;
        margin: 0; */
        font-family: Merriweather;
        font-size: 16px;
        height: 100%;
    }
    .container {
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-template-rows: 50px 100px 1fr 50px;
        grid-template-areas:
        "header header"
        "sidebar upload-content"
        "sidebar footer";
        
        grid-gap: 0;
        min-height: 100vh;
        background-color: white;
    }

    .header {
        grid-area: header;
    }

    .sidebar {
        grid-area: sidebar;
    }

    .footer {
        grid-area: footer;
    }

    .upload-content {
        grid-area: upload-content;
    }

    .preview {
        height: 20%;
        width: 20%;
        margin: auto;
    }

    .preview img {
        /* margin: auto; */
    }
</style>