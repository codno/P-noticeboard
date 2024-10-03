import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, content } = await request.json();

  // 데이터 저장 로직 (예: DB에 저장)
  console.log('제목:', title);
  console.log('내용:', content);

  // 응답
  return NextResponse.json({ message: '게시글이 저장되었습니다!' }, { status: 201 });
}