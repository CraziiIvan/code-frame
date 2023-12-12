import { ReactNode } from "react";

type TSideBarSectionProps = {
  sectionTitle: string;
  children: ReactNode;
};

function SideBarSection({ sectionTitle, children }: TSideBarSectionProps) {
  return (
    <div className=" pt-3 pb-5 px-6 flex flex-col gap-y-4 text-sm">
      <h5 className="text-neutral-800 dark:text-neutral-400 font-medium">{sectionTitle}</h5>
      {children}
    </div>
  );
}

export default SideBarSection;
