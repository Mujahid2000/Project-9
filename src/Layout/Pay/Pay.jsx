

const Pay = () => {
    return (
        <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl mt-10 mb-10 font-semibold">Payment form</h2>
            <from>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Card Number:
                    </label>
                    <input
                        type="number"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"

                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-700"
                    >
                        Card Type:
                    </label>
                    <select
                        name="cardType"

                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    >
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label

                        className="block text-sm font-medium text-gray-700"
                    >
                        Expiry Date:
                    </label>
                    <input
                        type="number"
                        name="expiryDate"
                        placeholder="MM/YY"

                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-700"
                    >
                        CVV:
                    </label>
                    <input
                        type="number"
                        name="cvv"
                        placeholder="123"

                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Pay Now
                    </button>
                </div>
            </from>
        </div>
    );
};

export default Pay;
