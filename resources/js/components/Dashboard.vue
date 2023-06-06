<template>
  <div data-app ref="top">
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      :time="time"
      @show-alert="updateAlert($event)"
      class="mb-4"
    />
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
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  mdi-file-clock
                </v-icon>
                <span> {{ totalRequested }} </span>
                <p class="mb-0">Solicitadas</p>
              </div>

              <div class="body-item" v-if="!loading">
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  mdi-file-edit
                </v-icon>
                <span> {{ totalObserved }} </span>
                <p class="mb-0">Observadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  mdi-file-check
                </v-icon>
                <span> {{ totalApproved }} </span>
                <p class="mb-0">Aprobadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  mdi-file-remove
                </v-icon>
                <span> {{ totalRejected }} </span>
                <p class="mb-0">Rechazadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
                  mdi-file-star
                </v-icon>
                <span> {{ totalProcessed }} </span>
                <p class="mb-0">Procesadas</p>
              </div>
              <div class="body-item" v-if="!loading">
                <v-icon
                  large
                  class="color-primary"
                  style="justify-content: left"
                >
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
            <div
              v-for="(item, index) in this.records"
              :key="index"
              class="top-justification-item"
            >
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
            <h2>A.P. por tipo de justificación</h2>
            <p>Cantidad de acciones de personal por tipo de justicación.</p>
          </div>
          <div class="top-justifications-body">
            <div id="chartdiv"></div>
          </div>
        </div>
      </v-col>
      <!-- A.P by justifications -->
    </v-row>
  </div>
</template>

<script>
import personnelActionApi from "../apis/personnelActionApi";
import moment from "moment";

export default {
  data: () => ({
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    time: 5000,
    loading: false,
    records: [],
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
        personnelActionApi.post(`/latestPersonnelActions`),
        personnelActionApi.post(`/totalRequested`),
        personnelActionApi.post(`/totalObserved`),
        personnelActionApi.post(`/totalRejected`),
        personnelActionApi.post(`/totalApproved`),
        personnelActionApi.post(`/totalProcessed`),
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

        this.totalRequested = responses[1].data.totalRequested;
        this.totalObserved = responses[2].data.totalObserved;
        this.totalRejected = responses[3].data.totalRejected;
        this.totalApproved = responses[4].data.totalApproved;
        this.totalProcessed = responses[5].data.totalProcessed;

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
      var root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
        })
      );

      // We don't want zoom-out button to appear while animating, so we hide it
      chart.zoomOutButton.set("forceHidden", true);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var yRenderer = am5xy.AxisRendererY.new(root, {
        minGridDistance: 30,
      });

      yRenderer.grid.template.set("location", 1);

      var yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
          maxDeviation: 0,
          categoryField: "network",
          renderer: yRenderer,
          tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] }),
        })
      );

      var xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0,
          min: 0,
          extraMax: 0.1,
          renderer: am5xy.AxisRendererX.new(root, {
            strokeOpacity: 0.1,
          }),
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "value",
          categoryYField: "network",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "left",
            labelText: "{valueX}",
          }),
        })
      );

      // Rounded corners for columns
      series.columns.template.setAll({
        cornerRadiusTR: 5,
        cornerRadiusBR: 5,
        strokeOpacity: 0,
      });

      // Make each column to be of a different color
      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      // Set data
      var data = [
        {
          network: "Decreto No. 335 Paternidad",
          value: 2,
        },
        {
          network: "Actividades Sindicales",
          value: 13,
        },
        {
          network: "Dificultad de Marcación",
          value: 10,
        },
        // {
        //   network:
        //     "Estudios: Art. 85 Numeral 2, Disposiciones Generales de Presupuesto",
        //   value: 4,
        // },
      ];

      yAxis.data.setAll(data);
      series.data.setAll(data);
      sortCategoryAxis();

      // Get series item by category
      function getSeriesItem(category) {
        for (var i = 0; i < series.dataItems.length; i++) {
          var dataItem = series.dataItems[i];
          if (dataItem.get("categoryY") == category) {
            return dataItem;
          }
        }
      }

      chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          behavior: "none",
          xAxis: xAxis,
          yAxis: yAxis,
        })
      );

      // Axis sorting
      function sortCategoryAxis() {
        // Sort by value
        series.dataItems.sort(function (x, y) {
          return x.get("valueX") - y.get("valueX"); // descending
          //return y.get("valueY") - x.get("valueX"); // ascending
        });

        // Go through each axis item
        am5.array.each(yAxis.dataItems, function (dataItem) {
          // get corresponding series item
          var seriesDataItem = getSeriesItem(dataItem.get("category"));

          if (seriesDataItem) {
            // get index of series data item
            var index = series.dataItems.indexOf(seriesDataItem);
            // calculate delta position
            var deltaPosition =
              (index - dataItem.get("index", 0)) / series.dataItems.length;
            // set index to be the same as series data item index
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: 1000,
              easing: am5.ease.out(am5.ease.cubic),
            });
          }
        });

        // Sort axis items by index.
        // This changes the order instantly, but as deltaPosition is set,
        // they keep in the same places and then animate to true positions.
        yAxis.dataItems.sort(function (x, y) {
          return x.get("index") - y.get("index");
        });
      }

      // update data with random values each 1.5 sec
      setInterval(function () {
        // updateData();
      }, 1500);

      function updateData() {
        am5.array.each(series.dataItems, function (dataItem) {
          var value =
            dataItem.get("valueX") +
            Math.round(Math.random() * 1000000000 - 500000000);
          if (value < 0) {
            value = 500000000;
          }
          // both valueY and workingValueY should be changed, we only animate workingValueY
          dataItem.set("valueX", value);
          dataItem.animate({
            key: "valueXWorking",
            to: value,
            duration: 600,
            easing: am5.ease.out(am5.ease.cubic),
          });
        });

        sortCategoryAxis();
      }

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