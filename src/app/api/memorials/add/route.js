import { startDB } from "@/db/connect";
import { MemorialModel } from "@/db/models";
import { generateAccessCode } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const deceasedData = {
      name: formData.get("deceasedName"),
      birthDate: formData.get("birthDate"),
      deathDate: formData.get("deathDate"),
      biography: formData.get("biography"),
    };

    const organizerData = {
      name: formData.get("organizerName"),
      email: formData.get("organizerEmail"),
      relation: formData.get("organizerRelation"),
    };

    const image = formData.get("image");
    const isPublic = formData.get("isPublic") === "true";

    // Validation
    const isValidString = (value) =>
      typeof value === "string" && value.length > 0;

    if (!isValidString(deceasedData.name)) {
      return NextResponse.json(
        { message: "Deceased name is required" },
        { status: 400 }
      );
    }

    if (
      !isValidString(organizerData.name) ||
      !isValidString(organizerData.relation)
    ) {
      return NextResponse.json(
        { message: "Organizer name and relation are required" },
        { status: 400 }
      );
    }

    await startDB();

    const accessCode = generateAccessCode();
    const memorial = await MemorialModel.create({
      deceasedName: deceasedData.name,
      birthDate: deceasedData.birthDate,
      deathDate: deceasedData.deathDate,
      biography: deceasedData.biography,
      organizer: organizerData,
      mainPhoto: image,
      isPublic,
      accessCode,
    });

    return NextResponse.json({
      message: "Memorial created successfully",
      data: {
        accessCode: memorial.accessCode,
        memorialId: memorial._id,
      },
    });
  } catch (error) {
    console.log("error   ", error);
    
    return NextResponse.json(
      { error: error.message || "Error creating memorial" },
      { status: 500 }
    );
  }
}
