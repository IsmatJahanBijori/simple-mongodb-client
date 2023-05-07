
import './App.css'

function App() {

  const handleAddUser = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    // user create operation
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('User Added Successfully')
        }
      })
      event.target.reset()
  }
  return (
    <div>
      <h1>Simple CRUD and Mongodb Connection</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  )
}

export default App
