<template>
  <div class="hotel_booking_area position">
    <div class="container">
      <div class="hotel_booking_table">
        <div class="row">
          <div class="col-md-5">
            <h2>Search for an accomodation </h2>
          
          </div>
          <div class="col-md-8">
            <div class="booking_table">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <div class="form-group">
                    <div class="input-group date" id="datetimepicker11">
                      <input type="text" class="form-control" placeholder="Arrival Date" />
                      <span class="input-group-addon">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <div class="input-group date" id="datetimepicker1">
                      <input type="text" class="form-control" placeholder="Departure Date" />
                      <span class="input-group-addon">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <a class="book_now_btn button_hover" href="#">Search</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingForm'
}
</script>

<style scoped>


.booking_form_container {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 2;
}

.hotel_booking_area {
  background: #04091e;
}

.hotel_booking_table {
  background: #04091e;
  display: flex;
  align-items: center;
  padding: 40px 50px 30px;
}

.hotel_booking_table h2 {
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  text-transform: uppercase;
}

.boking_table {
  margin-left: -50px;
}

.book_tabel_item .form-group {
  margin-bottom: 0;
}

.book_tabel_item .form-group .input-group {
  position: relative;
}

.book_tabel_item .form-group .input-group .form-control {
  border: 1px solid #2b3146;
  background: transparent;
  border-radius: 0;
  font-size: 13px;
  line-height: 38px;
  padding: 0 20px;
  color: #777;
  z-index: 0;
}

.book_tabel_item .form-group .input-group .form-control:focus {
  outline: none;
  box-shadow: none;
}

.book_tabel_item .form-group .input-group .input-group-addon {
  background: transparent;
  padding: 0;
  border: 0;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  z-index: 2;
}

.book_tabel_item .input-group {
  margin-bottom: 10px;
}

.book_tabel_item .nice-select {
  background: transparent;
  border-radius: 0;
  border: 1px solid #2b3146;
  font-size: 13px;
  line-height: 40px;
  height: 40px;
  color: #777;
}

.book_tabel_item .nice-select:after {
  content: "\e874";
  font-family: 'Linearicons-Free';
  font-size: 13px;
  color: #777;
  border: 0;
  margin-top: 0;
  right: 20px;
  transform: rotate(0);
}

.button_hover {
  border-radius: 0px;
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  overflow: hidden;
  border: 0px;
  display: inline-block;
  text-align: center;
}

.button_hover:before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  z-index: -1;
  background: #f8b100;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  opacity: 0;
}

.button_hover:hover {
  color: #fff;
}

.button_hover:hover:before {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}


.book_now_btn {
  width: 100%;
  display: block;
  background: #f3c300;
  color: #222222;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  padding: 5px 20px;
}


</style>