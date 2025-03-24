import { NextResponse } from 'next/server'


export async function GET() {
  return NextResponse.json({items: [{id:1, title:"Hello Wold"}]})
}

// export async function API() {
//   // FORM Data
//   // API JSON POST DATA
//   return NextResponse.json({hello: "POST"})
// }