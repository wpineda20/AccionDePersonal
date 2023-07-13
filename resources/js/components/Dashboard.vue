<template>
  <div
    data-app
    ref="top"
  >
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      :time="time"
      @show-alert="updateAlert($event)"
      class="mb-4"
    />

    <banner-inmediate
      :showBannerInmediate="showBannerInmediate"
      @update-dialog="showBannerInmediate = false"
    />

    <v-row>
      <!-- A.P by status -->
      <v-col
        cols="12"
        md="12"
        lg="4"
        sm="12"
        class="pt-0"
      >
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            <h2>A.P. por estados</h2>
            <p>Cantidad de acciones de personal por estado.</p>
          </div>
          <div class="dashboard-card-body">
            <!-- Loader -->
            <loader
              v-if="loading"
              class="pt-5"
              style=""
            > </loader>
            <!-- /.Loader -->
            <div
              class="body-content"
              v-if="!loading"
            >
              <div
                class="body-item h-100"
                v-for="(item, index) in totals"
                :key="index"
              >
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  {{ item.icon }}
                </v-icon>
                <span> {{ item.total }} </span>
                <p class="mb-0">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <!-- A.P by status -->

      <!-- Latest justifications -->
      <v-col
        cols="12"
        md="12"
        lg="8"
        sm="12"
        class="pt-0"
      >
        <div class="top-justifications-card mb-3">
          <div class="top-justifications-header">
            <div class="header-content">
              <div class="header-content-item">
                <h2>Últimas acciones de personal</h2>
                <p class="pb-0">Últimas 5 acciones de personal generadas.</p>
              </div>
              <div class="header-content-item">
                <v-btn
                  href="/personnelAction"
                  class="mb-2 btn-normal"
                  style="background-color: #2d52a8 !important;"
                  rounded
                >
                  <v-icon left> mdi-plus </v-icon> Crear solicitud
                </v-btn>
              </div>
            </div>
          </div>
          <div class="top-justifications-body">
            <!-- Item 1 -->
            <div
              v-for="(item, index) in this.records"
              :key="index"
              class="top-justification-item"
            >
              <div class="top-justification-item-left">
                <div class="item-left-icon">
                  <v-icon
                    large
                    class="orange-text"
                  >
                    mdi-numeric-{{ index + 1 }}-circle
                  </v-icon>
                </div>
                <div class="item-left-text">
                  <h4>{{ item.justification_name }}</h4>
                  <p>{{ item.status_name }}</p>
                </div>
              </div>
              <div class="top-justification-item-right">
                <div class="item-right-text">
                  <p>{{ item.date_request_created }}</p>
                </div>
              </div>
            </div>
            <!-- Item  -->
            <!-- No Item -->
            <div
              v-if="records.length == 0 && !loading"
              class=""
            >
              <h4 class="fw-bold text-center">
                No se ha registrado ninguna acción de personal.
              </h4>
            </div>
            <!-- No Item -->
          </div>
          <!-- Loader -->
          <loader
            v-if="loading"
            class=""
          > </loader>
          <!-- /.Loader -->
        </div>
      </v-col>
      <!-- Latest justifications -->

      <!-- A.P by justifications -->
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="12"
      >
        <div class="top-justifications-card">
          <div class="top-justifications-header">
            <h2>Acciones de personal por tipo de justificación</h2>
            <p>Cantidad de acciones de personal por tipo de justicación.</p>
          </div>
          <div class="top-justifications-body">
            <!-- chart -->
            <div id="chartdiv"></div>
            <!-- chart -->
          </div>
        </div>
      </v-col>

      <!-- Justifications colors -->
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="12"
      >
        <div class="top-justifications-card">
          <div class="top-justifications-header">
            <h2>Tipos de justificación.</h2>
          </div>
          <div
            class="justifications-colors"
            v-for="(item, index) in this.justifications"
            :key="index"
          >
            <div class="color">
              <div
                class="picker"
                :style="{ backgroundColor: item.color }"
              >
                {{ item.letter }}
              </div>
            </div>
            <div class="justification-type">
              {{ item.justification_name }}
            </div>
          </div>
          <div class="">
            <!-- Loader -->
            <loader
              v-if="loading"
              class=""
            > </loader>
            <!-- /.Loader -->
          </div>
        </div>
      </v-col>
      <!-- Justifications colors -->
      <!-- A.P by justifications -->
    </v-row>
  </div>
</template>

<script>
import personnelActionApi from "../apis/personnelActionApi";
import justificationTypeApi from "../apis/justificationTypeApi";
import userApi from "../apis/userApi";
import moment from "moment";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
  data: () => ({
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    time: 5000,
    loading: false,
    records: [],
    justifications: [],
    byJustifications: [],
    totals: {},
    actualUser: {},
    totalPersonnelActions: 0,
    showBannerInmediate: false,
  }),

  methods: {
    async initialize() {
      this.loading = true;
      this.records = [];

      let requests = [
        personnelActionApi.get(`/latest`),
        personnelActionApi.get(`/total`),
        justificationTypeApi.get(`/colors`),
        personnelActionApi.get(`/byJustifications`),
        userApi.get(`/actualUser`),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(
          true,
          "No fue posible obtener la información de sus acciones de personal.",
          "fail"
        );

        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          419
        );
      });

      if (responses) {
        this.records = responses[0].data.data;
        moment.locale("es");
        this.records.forEach((record) => {
          record.date_request_created = moment(
            record.date_request_created
          ).format("L");
        });

        this.totals = responses[1].data.data;
        this.justifications = responses[2].data.records;
        this.byJustifications = responses[3].data.data;
        this.actualUser = responses[4].data.user;

        if (!this.actualUser.inmediate_superior_id) this.showBannerInmediate = true;

        this.createGraphic(this.byJustifications);
      }

      this.loading = false;
    },

    dateFormat() {
      moment.locale("es");
      this.events.forEach((event) => {
        event.event_date = moment(event.event_date).format("L");
      });
    },

    createGraphic(data) {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      let root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          // wheelX: "panX",
          // wheelY: "zoomX",
          pinchZoomX: false,
        })
      );

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
      xRenderer.labels.template.setAll({
        rotation: 0,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 0,
      });

      xRenderer.grid.template.setAll({
        location: 1,
      });

      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "letter",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          maxPrecision: 0,
          strictMinMax: true,
          renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1,
          }),
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "letter",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
        })
      );

      series.columns.template.setAll({
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0,
      });

      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      xAxis.data.setAll(data);
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
  },

  async mounted() {
    await this.initialize();
  },
};
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 400px;
}
</style>