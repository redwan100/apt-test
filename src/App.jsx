import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    p_k: "",
    Reference_No: "",
    Purchase_Date: "",
    Purchase_Status: "",
    Address: "",
    Pay_Term: "",
    Attached_Document: "",
    Supplier: "",
    Business_Location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]?.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    //   // // Object.entries(formData).forEach(([key, value]) => {
    //   // //   formDataToSend.append(key, value);
    //   // // });

    formDataToSend.append("p_k", Number(formData.p_k));
    formDataToSend.append("Reference_No", formData.Reference_No);
    formDataToSend.append("Purchase_Date", Number(formData.Purchase_Date));
    formDataToSend.append("Purchase_Status", formData.Purchase_Status);
    formDataToSend.append("Address", formData.Address);
    formDataToSend.append("Pay_Term", Number(formData.Pay_Term));
    // image file
    formDataToSend.append("Attached_Document", formData.Attached_Document);
    formDataToSend.append("Supplier", Number(formData.Supplier));
    formDataToSend.append(
      "Business_Location",
      Number(formData.Business_Location)
    );

    // const newPurchaseData = {
    //   p_k: Number(formData.p_k),
    //   Reference_No: formData.Reference_No,
    //   Purchase_Date: formData.Purchase_Date,
    //   Purchase_Status: Number(formData.Purchase_Status),
    //   Address: formData.Address,
    //   Pay_Term: Number(formData.Pay_Term),
    //   Attached_Document: formData.Attached_Document,
    //   Supplier: Number(formData.Supplier),
    //   Business_Location: Number(formData.Business_Location),
    // };

    // console.log(newPurchaseData);

    try {
      const res = await fetch(
        "https://softwareapi.techelementbd.com/papi/addpurchaseapil/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formDataToSend,
        }
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error posting purchase data:", error);
    }
  };

  console.log(formData);

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
              value={formData.Attached_Document}
              onChange={handleFileChange}
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
