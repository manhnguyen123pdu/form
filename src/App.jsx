import React from 'react'

const App = () => {

  const [user, setUser] = React.useState({
    username: '',
    password: '',
    email: '',
    car: '',
    gender: '',
    sports: [], //kiểm tra = indexOf,
    file: null
  })

  /**
   * errors: {
   *     email: 'Email ko được để trống',
   *     password: "Password không được để trống"
   * }
   */
  const [errors, setErrors] = React.useState({ errors: {} })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChanged = (e) => {
    const { sports } = { ...user }
    const mySet = new Set(sports) // tạo ra 1 Set mới, với giá trị khởi tạo là dữ liệu của sports
    //Kiểm tra xem Set của mình có value hay chưa,
    //nếu có rồi (tức là đã check) thì sẽ tiến hành xóa khỏi Set
    if (mySet.has(e.target.value)) {
      mySet.delete(e.target.value) //[a,b,c] a ==> [a,b,c].filter(item => item != a) ==> [b,c]
    }
    //nếu checkbox chưa được check, thêm vào Set
    else {
      mySet.add(e.target.value)
    }

    setUser({
      ...user,
      sports: Array.from(mySet)
    })
  }

  //file upload
  const handleFileUpload = (e) => {
    setUser({
      ...user,
      file: e.target.files[0]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() //chống form xử lí tải lại trang
    const errs = { ...errors }
    const myUser = { ...user }
    let hasValidationErrors = false;
    if (myUser.username === '') {
      errs.errors.username = `Username không được để trống`
      hasValidationErrors = true
    } else {
      hasValidationErrors = false
    }

    if (myUser.password === '') {
      errs.errors.password = `Password không được để trống`
      hasValidationErrors = true
    } else {
      hasValidationErrors = false
    }

    if (hasValidationErrors) {
      setErrors({
        ...errors,
        ...errs
      })
    }

    else {
      setErrors({ errors: {} })
      console.log(JSON.stringify(user))
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {console.log(errors.errors)}
      <div>
        <label>Username</label>
        <input type="text" name='username' onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} />
        {errors.errors?.username && <p>{errors.errors.username}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" name='password' onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} />
        {errors.errors?.password && <p>{errors.errors.password}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" name='email' onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} />
        {errors.errors?.email && <p>{errors.errors.email}</p>}
      </div>

      {/* Select Option */}
      <div>
        <select name='car' onChange={(e) => handleChange(e)}>
          <option value="bmw">BMW</option>
          <option value="merc">Merc</option>
          <option value="toyota">Toyota</option>
        </select>
      </div>

      {/* Radio */}
      <div>
        <input id="male" type="radio" name='gender' value="male" onChange={(e) => handleChange(e)} />
        <label htmlFor='male'>Male</label>
        <input id="female" type="radio" name='gender' value="female" onChange={(e) => handleChange(e)} />
        <label htmlFor='female'>Female</label>
      </div>

      {/* Checkbox */}
      <div>
        <input id="voleyball" type="checkbox" name='sports' value="voleyball" onChange={(e) => handleCheckboxChanged(e)} />
        <label htmlFor='voleyball'>Bóng chuyền</label>
        <input id="football" type="checkbox" name='sports' value="football" onChange={(e) => handleCheckboxChanged(e)} />
        <label htmlFor='football'>Bóng đá</label>
        <input id="basketball" type="checkbox" name='sports' value="basketball" onChange={(e) => handleCheckboxChanged(e)} />
        <label htmlFor='basketball'>Bóng rổ</label>
      </div>

      {/* File upload */}
      <div>
        <input type="file" name='file' onChange={(e) => handleFileUpload(e)} />
      </div>


      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  )
}

export default App