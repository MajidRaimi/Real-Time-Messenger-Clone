
import { SideBar } from "../components"

export default async function UserLayout({
    children
}: {
    children: React.ReactNode
}) {
    // @ts-expect-error Server Component
    return <SideBar>
        <div className='h-full '>
            {children}
        </div>
    </SideBar>
}
