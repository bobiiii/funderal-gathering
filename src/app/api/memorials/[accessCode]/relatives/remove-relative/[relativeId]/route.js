// app/api/memorials/[accessCode]/relatives/route.ts
import { NextResponse } from "next/server";
import { MemorialModel, RelativesModel } from "@/db/models";
import { startDB } from "@/db/connect";

export async function DELETE(request, { params }) {
  try {
    const { relativeId, accessCode } = await  params;
    // Validation
    if (!relativeId ||  !accessCode) {
      return NextResponse.json(
        { message: "relativeId and accessCode are required" },
        { status: 400 }
      );
    }

    await startDB();

    // Verify memorial exists
    const memorial = await MemorialModel.findOne({
      accessCode: accessCode,
    });

    if (!memorial) {
      return NextResponse.json(
        { message: "Memorial not found" },
        { status: 404 }
      );
    }

    const relative = await RelativesModel.findByIdAndDelete(relativeId);
    if (!relative) {
      return NextResponse.json(
        { message: "Relative not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "Relative removed successfully",
      data: relative,
    });
  } catch (error) {
    console.error("Error removing relative:", error);
    return NextResponse.json(
      { error: error.message || "Error removing relative" },
      { status: 500 }
    );
  }
}
