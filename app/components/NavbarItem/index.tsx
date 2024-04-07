'use client'

export const NavbarItem = ({ label, onClick }: { label: string; onClick: () => void }) => {
	return (
		<button className="hover:text-slate-400 cursor-pointer text-xs" onClick={onClick}>
			{label}
		</button>
	)
}
