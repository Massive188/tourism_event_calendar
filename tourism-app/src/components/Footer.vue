<template>
    <footer class="footer">
        <div class="container">
            <p>&copy; {{ currentYear }} Your Company. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            
            currentYear: new Date().getFullYear()
        };
    }
};
</script>

<style scoped>
.footer {
    background-color: #db4f4f;
    height: 100vh;
    text-align: center;
}
</style>