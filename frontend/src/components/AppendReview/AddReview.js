import React from 'react'

const AddReview = () => {
    const rating = [
        {label: "0", value: 0},
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3},
        {label: "4", value: 4},
        {label: "5", value: 5}
      ];
  return (
    <div className="bg-gray-600 text-white font-semibold py-2">
            <form>
              <div>
                {/* Group Name */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="groupName" className="py-2 text-lg">
                    Add Group Name
                  </label>
                  <input
                    id="groupName"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="category" className="py-2 text-lg">
                    Rating
                  </label>
                  <select
                    id="category"
                    className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  >
                    {rating.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Group Description */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="description" className="py-2 text-lg">
                    Group Description
                  </label>
                  <textarea
                    id="description"
                    className="materialize-textarea shadow border rounded w-1/2 py-2 px-3 text-gray-700"
                    style={{ height: '200px' }}
                  />
                </div>
              </div>
            </form>
            <div className="mx-20 mt-4">
              <button type="submit" className="bg-cyan-500 px-4 py-2 text-white rounded">
                Submit
              </button>
            </div>
          </div>
  )
}

export default AddReview
