// app/api/memorials/[accessCode]/tree/route.ts
import { NextResponse } from "next/server";
import { MemorialModel, RelativesModel } from "@/db/models";
import { startDB } from "@/db/connect";

export async function GET(request, { params }) {
  const { accessCode } = await  params;
    try {
    await startDB();

    const memorial = await MemorialModel.findOne({
      accessCode: accessCode,
    }).lean();

    if (!memorial) {
      return NextResponse.json(
        { message: "Memorial not found" },
        { status: 404 }
      );
    }

    const relatives = await RelativesModel.find({
      memorialId: memorial._id,
    }).lean();

    // Structure the data for family tree visualization
    const treeData = {
      deceased: {
        id: memorial._id,
        name: memorial.deceasedName,
        photo: memorial.mainPhoto,
        
      },
      relatives: relatives.map((relative) => ({
        id: relative._id.toString(),
        name: relative.name,
        relation: relative.relation,
        photo: relative.photo,
      })),
    };

    return NextResponse.json({
      message: "Family tree retrieved successfully",
      data: treeData,
    });
  } catch (error) {
    console.log("Error retrieving family tree:", error);
    
    return NextResponse.json(
      { error: error.message || "Error retrieving family tree" },
      { status: 500 }
    );
  }
}
