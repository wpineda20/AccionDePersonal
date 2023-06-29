<template>
  <div data-app ref="top">
    <alert :text="textAlert" :event="alertEvent" :show="showAlert" :time="time" @show-alert="updateAlert($event)"
      class="mb-4" />
    <v-row>
      <!-- A.P by status -->
      <v-col cols="12" md="4" lg="4" sm="12" class="pt-0">
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            <h2>A.P. por estados</h2>
            <p>Cantidad de acciones de personal por estado.</p>
          </div>
          <div class="dashboard-card-body">
            <!-- Loader -->
            <loader v-if="loading" class="pt-5" style=""> </loader>
            <!-- /.Loader -->
            <div class="body-content">
              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-clock
                </v-icon>
                <span> {{ totalRequested }} </span>
                <p class="mb-0">Solicitadas</p>
              </div>

              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-edit
                </v-icon>
                <span> {{ totalObserved }} </span>
                <p class="mb-0">Observadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-check
                </v-icon>
                <span> {{ totalApproved }} </span>
                <p class="mb-0">Autorizadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-remove
                </v-icon>
                <span> {{ totalRejected }} </span>
                <p class="mb-0">Rechazadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-star
                </v-icon>
                <span> {{ totalProcessed }} </span>
                <p class="mb-0">Finalizadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon large class="color-primary" style="justify-content: left">
                  mdi-file-multiple
                </v-icon>
                <span> {{ totalPersonnelActions }} </span>
                <p class="mb-0">Total</p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <!-- A.P by status -->

      <!-- Latest justifications -->
      <v-col cols="12" md="8" lg="8" sm="12" class="pt-0">
        <div class="top-justifications-card mb-3">
          <div class="top-justifications-header">
            <h2>Últimas acciones de personal</h2>
            <p class="pb-3">Últimas 5 acciones de personal generadas.</p>
          </div>
          <div class="top-justifications-body">
            <!-- Item 1 -->
            <div v-for="(item, index) in this.records" :key="index" class="top-justification-item">
              <div class="top-justification-item-left">
                <div class="item-left-icon">
                  <v-icon large class="orange-text">
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
            <div v-if="records.length == 0 && !loading" class="">
              <h4 class="fw-bold text-center">
                Aún no se registrado ninguna acción de personal!
              </h4>
            </div>
            <!-- No Item -->
          </div>
          <!-- Loader -->
          <loader v-if="loading" class=""> </loader>
          <!-- /.Loader -->
        </div>
      </v-col>
      <!-- Latest justifications -->

      <!-- A.P by justifications -->
      <v-col cols="12" md="12" sm="12" lg="12">
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
      <v-col cols="12" md="12" sm="12" lg="12">
        <div class="top-justifications-card">
          <div class="top-justifications-header">
            <h2>Tipos de justificación.</h2>
          </div>
          <div class="justifications-colors" v-for="(item, index) in this.justifications" :key="index">
            <div class="color">
              <div class="picker" :style="{ backgroundColor: item.color }">
                {{ item.letter }}
              </div>
            </div>
            <!-- <div class="letter">{{ item.letter }}</div> -->
            <div class="justification-type">
              {{ item.justification_name }}
            </div>
          </div>
          <div class="">
            <!-- Loader -->
            <loader v-if="loading" class=""> </loader>
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
import moment from "moment";
import axios from "axios";

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
    personnelActionsByJustifications: [],
    totalRequested: 0,
    totalObserved: 0,
    totalRejected: 0,
    totalApproved: 0,
    totalProcessed: 0,
    totalPersonnelActions: 0,
  }),

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.records = [];

      let requests = [
        personnelActionApi.get(`/latestPersonnelActions`),
        personnelActionApi.get(`/total`, {
          params: {
            status_name: 'Solicitada'
          }
        }),
        personnelActionApi.get(`/total`, {
          params: {
            status_name: 'Observada'
          }
        }),
        personnelActionApi.get(`/total`, {
          params: {
            status_name: 'Rechazada'
          }
        }),
        personnelActionApi.get(`/total`, {
          params: {
            status_name: 'Finalizada'
          }
        }),
        personnelActionApi.get(`/total`, {
          params: {
            status_name: 'Procesada'
          }
        }),
        // personnelActionApi.get(`/totalRejected`),
        // personnelActionApi.get(`/totalApproved`),
        // personnelActionApi.get(`/totalProcessed`),
        justificationTypeApi.get(`/justificationLettersColors`),
        personnelActionApi.get(`/personnelActionsByJustifications`),
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
        this.records = responses[0].data.records;
        moment.locale("es");
        this.records.forEach((record) => {
          record.date_request_created = moment(
            record.date_request_created
          ).format("L");
        });

        this.totalRequested = responses[1].data.total;
        this.totalObserved = responses[2].data.total;
        this.totalRejected = responses[3].data.total;
        this.totalApproved = responses[4].data.total;
        this.totalProcessed = responses[5].data.total;
        this.justifications = responses[6].data.records;
        this.personnelActionsByJustifications = responses[7].data.records;

        //total
        this.totalPersonnelActions =
          this.totalRequested +
          this.totalObserved +
          this.totalRejected +
          this.totalApproved +
          this.totalProcessed;
      }

      this.loading = false;
    },

    dateFormat() {
      moment.locale("es");
      this.events.forEach((event) => {
        event.event_date = moment(event.event_date).format("L");
      });
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
  },

  mounted() {
    am5.ready(function () {
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

      // Set data
      // console.log("hola");
      // console.log(this.personnelActionsByJustifications);
      // let data = this.personnelActionsByJustifications;
      let data = [
        {
          letter: "A",
          value: 20,
        },
        {
          letter: "B",
          value: 10,
        },
        {
          letter: "C",
          value: 18,
        },
        {
          letter: "D",
          value: 13,
        },
        {
          letter: "E",
          value: 21,
        },
        {
          letter: "F",
          value: 11,
        },
        {
          letter: "G",
          value: 40,
        },
        {
          letter: "H",
          value: 7,
        },
        {
          letter: "I",
          value: 16,
        },
        {
          letter: "J",
          value: 24,
        },
        {
          letter: "K",
          value: 4,
        },
        {
          letter: "L",
          value: 30,
        },
        {
          letter: "M",
          value: 14,
        },
      ];

      xAxis.data.setAll(data);
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
    }); // end am5.ready()
  },
};
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 400px;
}
</style>