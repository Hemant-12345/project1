document.getElementById("userform").addEventListener("register", async (e) => {
  e.preventDefault();

  const Name = document.getElementById("Name").value.trim();
  const Email = document.getElementById("Email").value.trim();
  const Password = document.getElementById("Password").value.trim();

  if (!Name || !Email || !Password) {
    alert("All fields are required");
    return;
  }

  // 1 Check if email already exists 
  const { data: existingUser, error: checkError } =
    await supabaseClient
      .from("users")
      .select("id")
      .eq("Email", Email)
      .maybeSingle();

  if (checkError) {
    console.error(checkError);
    alert("Error checking user");
    return;
  }

  if (existingUser) {
    alert("Email already Register");
    return;
  }

  const {error:inserError} = await supabaseClient
    .from("users")
    .Insert([
      {
        Name : name,
        Email : email,
        Password : Password
      }
    ])

  if(insertError) {
    console.error("insertError");
    alert("Registraition failed");
    return;
  }

  alert("Registraition Successfully");
  e.target.reset();
});
