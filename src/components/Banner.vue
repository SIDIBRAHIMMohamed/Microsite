<template>
  <section class="banner_area">
    <div class="booking_table d_flex align-items-center">
      <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
      <div class="container">
        <div class="banner_content text-center">
          <h6>Away from monotonous life</h6>
          <h2>Relax Your Mind</h2>
          <p>If you are looking at blank cassettes on the web, you may be very confused at the<br> difference in price. You may see some for as low as $.17 each.</p>
          <BookingForm /> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BookingForm from './BookingForm.vue';

export default {
  name: 'BannerPage',
  components: {
    BookingForm
  }
}
</script>
<style scoped>

.banner_area {
  background: #04091e;
  position: relative;
  z-index: 1;
}

.banner_area .bg-parallax {
  background: url("../assets/image/banner_bg.jpg") no-repeat scroll center 0/cover;
  opacity: 0.50;
}
.booking_table {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 800px;
}

.banner_area .position {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
}

.d_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 125%;
  bottom: 0;
  z-index: -1;
}
.single-post-area .thumb .overlay-bg {
  background: rgba(0, 0, 0, 0.8);
}
.breadcrumb_area .bg-parallax {
  background: url("../assets/image/about_banner.jpg") no-repeat scroll center 0/cover;
  opacity: 0.50;
  z-index: -1;
}
/* .blog_banner .bg-parallax {
  background: url(../assets/image/banner/banner-1.jpg) no-repeat scroll center center;
}
.blog_banner_two .bg-parallax {
  background: url(../assets/image/banner/banner-2.jpg) no-repeat scroll center top/cover;
} */

@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

.banner_content {
  color: #fff;
  margin-bottom: 94px;
}

.banner_content h6 {
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 400;
}

.banner_content h2 {
  font-size: 60px;
  line-height: 60px;
  font-weight: 700;
}

.banner_content p {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 0px 20px;
}
.blog_banner .banner_content {
  margin-bottom: 0px;
  margin-top: 106px;
}

.blog_banner .banner_content h4 {
  font-size: 60px;
  line-height: 66px;
  font-weight: bold;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.blog_banner .banner_content p {
  font-size: 16px;
  padding: 0px;
  margin-bottom: 35px;
}
.booking_table {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 800px;
}



</style>