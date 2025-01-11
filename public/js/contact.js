document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      message: formData.get("message"),
    };
  
    const response = await fetch("/contact_us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    console.log(await response.json());
  });
  