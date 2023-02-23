<template>

<section class="section-header  pt-16 cont ">
    <h2 class="text-h4 text-center font-weight-bold ">Contact Us</h2>


    <v-container class="ma-auto">
     <h3 class="text-h6 pt-6 text-center font-weight-bold">
            Please get in touch and our expert support team will answer all your
            questions.

          </h3>
      <v-row>
        <v-col cols="12" md="6">

          <v-card class="px-4 mx-3 bg-indigo-lighten-5" max-width="600">
            <v-card-text>
              <v-form ref="loginForm"  lazy-validation>
                <v-row>
                  <v-col cols="12" >
                    <v-text-field

            label="Name"
            clearable  variant="underlined" color="indigo"
          ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field pills

                    variant="underlined"
                      label="E-mail" color="indigo"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                    variant="underlined" color="indigo"

                      label="Subject"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field

                    variant="underlined" color="indigo"

                      label="Message"
                      required
                    ></v-text-field>

                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn x-large block  color="indigo">
                Contact
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col cols="12" md="4" >
        <v-img  class="mt-2" src="../../public/assets/62fa51718b9dd618022d4594_Frame_1780-p-800.png"></v-img>
        <!-- <iframe
            class="text-right mt-2 ml-1"
            frameborder="0"
            width="600" height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> -->
          </v-col>
        <!-- <v-col cols="12" md="3"> -->
          <!--
            width="600" height="450"

             <iframe width="50%"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe> -->

          <!-- <iframe
            class="text-right"
            frameborder="0"
            width="350"
            height="390"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> -->
        <!-- </v-col> -->
      </v-row>
      <v-row>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-phone</v-icon> </v-avatar
                ><span class="font-weight-bold">Phone:</span>+9634444444
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-map</v-icon> </v-avatar
                ><span class="font-weight-bold">Address:</span>Syria-Damascus
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-email</v-icon> </v-avatar
                ><span class="font-weight-bold block">Email:</span>
                rahafdoui@gmail.com
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-account</v-icon> </v-avatar
                ><span class="font-weight-bold">Name:</span>RahafDouiar
              </v-card>
            </v-col>
          </v-row>
      <!--  -->
    </v-container>
  </section>


</template>
<style>
.icon-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 24px;
  line-height: 0;

  color: #fff;
  background: #2333b0;
  border-radius: 50%;
  margin-right: 15px;
}
.cont{

}</style>
