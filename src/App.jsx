import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    p_k: "",
    Reference_No: "",
    Purchase_Date: "",
    Purchase_Status: "",
    Address: "",
    Pay_Term: "",
    Attached_Document: null,
    Supplier: "",
    Business_Location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Attached_Document") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://softwareapi.techelementbd.com/papi/addpurchaseapil/";

      const formDataToSend = new FormData();
      formDataToSend.append("p_k", formData.p_k);
      formDataToSend.append("Reference_No", formData.Reference_No);
      formDataToSend.append("Purchase_Date", formData.Purchase_Date);
      // Append other form fields as needed
      formDataToSend.append("Address", formData.Address);
      formDataToSend.append("Pay_Term", formData.Pay_Term);
      // formDataToSend.append('Attached_Document', formData.Attached_Document);
      formDataToSend.append("Supplier", formData.Supplier);
      formDataToSend.append("Business_Location", formData.Business_Location);
      // Append the file
      formDataToSend.append("Attached_Document", formData.Attached_Document);

      const response = await fetch(url, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Data sent successfully!");
        // Reset the form or clear the state as needed
        setFormData({
          p_k: "",
          Reference_No: "",
          Purchase_Date: "",
          Purchase_Status: "",
          Address: "",
          Pay_Term: "",
          Attached_Document: null,
          Supplier: "",
          Business_Location: "",
        });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-slate-100 w-full min-h-screen p-4">
      <form
        className=" mx-auto bg-white px-2 w-full  drop-shadow-md rounded-md  max-w-2xl py-2"
        onSubmit={handleSubmit}
      >
        <div className="md:grid md:grid-cols-2 gap-5 md:items-center w-full p-4">
          {/* Add input fields for each property in the formData object */}
          <div className="mb-4">
            <label
              htmlFor="p_k"
              className="block text-sm font-medium text-gray-600"
            >
              P_K
            </label>
            <input
              type="number"
              id="p_k"
              name="p_k"
              value={formData.p_k}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Reference_No"
              className="block text-sm font-medium text-gray-600"
            >
              Reference_No
            </label>
            <input
              type="text"
              id="Reference_No"
              name="Reference_No"
              value={formData.Reference_No}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Purchase_Date"
              className="block text-sm font-medium text-gray-600"
            >
              Purchase_Date
            </label>
            <input
              type="date"
              id=" Purchase_Date"
              name="Purchase_Date"
              value={formData.Purchase_Date}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Purchase_Status"
              className="block text-sm font-medium text-gray-600"
            >
              Purchase_Status
            </label>
            <input
              type="number"
              id=" Purchase_Status"
              name="Purchase_Status"
              value={formData.Purchase_Status}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id=" Address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Pay_Term"
              className="block text-sm font-medium text-gray-600"
            >
              Pay_Term
            </label>
            <input
              type="number"
              id=" Pay_Term"
              name="Pay_Term"
              value={formData.Pay_Term}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Attached_Document"
              className="block text-sm font-medium text-gray-600"
            >
              Attached_Document
            </label>
            <input
              type="file"
              accept="image/*"
              id=" Attached_Document"
              name="Attached_Document"
              // value={formData.Attached_Document}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=" Supplier"
              className="block text-sm font-medium text-gray-600"
            >
              Supplier
            </label>
            <input
              type="number"
              id=" Supplier"
              name="Supplier"
              value={formData.Supplier}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=" Business_Location"
              className="block text-sm font-medium text-gray-600"
            >
              Business_Location
            </label>
            <input
              type="number"
              id=" Business_Location"
              name="Business_Location"
              value={formData.Business_Location}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        </div>

        <div className="my-4 mx-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
