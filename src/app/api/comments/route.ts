import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not Authenticated!" },
        { status: 500 }
      );
    }

    const { postId, text } = await req.json();
    const newComment = await prisma.comment.create({
      data: {
        postId,
        text,
        authorEmail: user.email,
      },
    });

    return NextResponse.json({ newComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not Authenticated!" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const { commentId } = body;

    const deletedComment = await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    return NextResponse.json({ deletedComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

// export async function DELETE(req: Request) {
//   try {
//     const user = await getCurrentUser();

//     if (!user?.email) {
//       return NextResponse.json(
//         { message: "Not Authenticated!" },
//         { status: 401 }
//       );
//     }

//     const body = await req.json();

//     const { commentId } = body;

//     const deletedComment = await prisma.comment.delete({
//       where: {
//         id: commentId,
//       },
//     });

//     return NextResponse.json({ deletedComment }, { status: 200 });
//   } catch (error) {
//     console.error("Error deleting comment:", error);
//     return NextResponse.json(
//       { message: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }
