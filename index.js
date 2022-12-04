function submitData() {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: "Ontaria",
      email: "ontaria.woods@gmail.com",
    })
      .then((resp) => resp.JSON)
      .then((object) => console.log(object)),
  });
}
