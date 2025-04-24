export async function getMemorialData(accessCode) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/memorials/${accessCode}/relatives/tree`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch memorial data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching memorial:", error);
    return null;
  }
}

export async function removerelative(accessCode, relativeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/memorials/${accessCode}/relatives/remove-relative/${relativeId}`,
    {
      method: "DELETE",
    }
  );

  console.log("response  " , response );
  

  if (!response.ok) {
    throw new Error(
      response.status === 401
        ? "Invalid access code"
        : "Failed to delete relative"
    );
  }

  return response.json();
}
