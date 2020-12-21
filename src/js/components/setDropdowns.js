import jSuites from "jsuites";
import properties from "../properties";
import updatePage from "../utility/updatePage";

// UNDER CONSTRUCTION
// this function set both dropdown menus in header
export default function () {
  // region dropdown
  const regionDropdown = jSuites.dropdown(
    document.getElementById("region-dropdown"),
    {
      type: "default",
      // default values
      value: "World",
      data: [
        "World",
        "India",
        "France",
        "Germany",
        "Ukraine",
        "Italy",
        "Spain",
        "Canada",
        "China",
        "US",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8a",
        "U9",
      ],
      autocomplete: true,
      lazyLoading: true,
      width: "100%",
      // change properties when dropdown menu close (on each change of value)
      onclose: function () {
        properties.region = regionDropdown.getValue();
        if (this.value === "") {
          regionDropdown.setValue("World");
          // did this to show selected item if twice choice same item, dont find another way
          regionDropdown.open();
          regionDropdown.close();
        }
      },
    }
  );

  // period dropdown
  const periodDropdown = jSuites.dropdown(
    document.getElementById("period-dropdown"),
    {
      type: "default",
      value: "All time",
      data: ["All time", "Last day"],
      autocomplete: true,
      lazyLoading: true,
      width: "100%",
      // change properties when dropdown menu close (on each change of value)
      onclose: function () {
        properties.period = periodDropdown.getValue();
        updatePage();
        if (this.value === "") {
          periodDropdown.setValue("All time");
          // did this to show selected item if twice choice same item, dont find another way
          periodDropdown.open();
          periodDropdown.close();
        }
      },
    }
  );
}
