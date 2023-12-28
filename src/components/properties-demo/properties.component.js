import { useState } from "react";
import { TemplateDemoComponent } from "../template-demo/template-demo.component";

export function PropertiesComponent() {
  const [orientation, setOrientation] = useState("");
  function LayoutChange(e) {
    if (e.target.value == "horizontal") {
      setOrientation(e.target.value);
    } else {
      setOrientation("vertical");
    }
  }
  return (
    <div className="container-fluid">
      <h2>Conditional Rendering</h2>
      <div className="mb-2">
        <select onChange={LayoutChange}>
          <option value="-1">Select Layout</option>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
      </div>
      <TemplateDemoComponent layout={orientation} />
    </div>
  );
}

/*
import { useState } from "react";
import { GridComponent } from "../grid/grid.component";

export function PropertiesComponent() {
  const [products] = useState([
    { Name: "TV", Price: 45000.33, Stock: "Available", Qty: 3 },
    { Name: "Shoe", Price: 5000.33, Stock: "Out of Stock", Qty: 4 },
  ]);
  return (
    <div className="container-fluid">
      <GridComponent
        theme="yellow"
        title="Employee Grid"
        fields={["Name", "Designation", "Salary"]}
        data={[
          { Name: "John", Designation: "Manager", Salary: 45000.44 },
          { Name: "David", Designation: "Developer", Salary: 23000.44 },
        ]}
      />
      <GridComponent
        theme="green"
        title="Products Grid"
        fields={["Name", "Price", "Stock", "Qty"]}
        data={products}
      />
    </div>
  );
}

/*import { LoginComponent } from "../login/login.component";






export function PropertiesComponent() {
  return (
    <div className="container-fluid">
      <LoginComponent title="Admin Login" login_id="Email" login_type="email" />
    </div>
  );
}
*/
