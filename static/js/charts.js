// Init function takes ID num and sets them as
// options of the dropdown menu
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("JSONS/US_category_id.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // optionChanged function is called in html
  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  // buildMetadata function called in optionChanged
  function buildMetadata(sample) {
    d3.json("JSONS/US_category_id.json").then((data) => {
      var metadata = data.metadata;
      var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultsArray[0]; //Because results are returned like an array =[0]
      var PANEL = d3.select("#JSONS/US_category_id-metadata");

      PANEL.html(""); //Clear content before other id gets called
      PANEL.append("h6").text(`Category ID: ${result.id}`);
      PANEL.append("h6").text(`Comments disabled: ${result.comments}`);
      PANEL.append("h6").text(`Ratings disabled: ${result.ratings}`);
      PANEL.append("h6").text(`Publish month: ${result.month}`);
    });
  }