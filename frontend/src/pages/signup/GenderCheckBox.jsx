
const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
                <span className='label-text text-gray-300'>Male</span>
                <input type='checkbox' className='checkbox border-white' 
                    checked={selectedGender==="male"}
                    onChange={()=>onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
                <span className='label-text text-gray-300'>Female</span>
                <input type='checkbox' className='checkbox border-white'
                          checked={selectedGender==="female"}
                          onChange={()=>onCheckBoxChange("female")}
                    
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox;