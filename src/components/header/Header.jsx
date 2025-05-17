import React, { useState, useEffect } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeat) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      id: Date.now(),
      fullname: name,
      email,
      number,
      gender,
    };

    const updatedData = [...data, newUser];
    setData(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData)); 


    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setRepeat("");
    setGender("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center border-b pb-2">
          Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Enter your number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-f   p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              required
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Gender</h3>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                checked={gender === "Prefer not to say"}
                onChange={(e) => setGender(e.target.value)}
              />
              Prefer not to say
            </label>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 rounded font-semibold shadow hover:opacity-90 transition"
          >
            Register
          </button>
        </div>
      </form>

     
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-xl shadow-md text-center space-y-4"
            >
              <img
                src="https://www.svgrepo.com/show/382106/avatar-businessman.svg"
                alt="Profile"
                className="w-24 h-24 mx-auto"
              />
              <h2 className="text-lg font-bold">Name: {user.fullname}</h2>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {user.number}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {user.gender}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
