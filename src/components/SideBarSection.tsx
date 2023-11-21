type TSideBarSectionProps = {
  sectionTitle: string;
  childern?: JSX.Element;
};

function SideBarSection({ sectionTitle, childern }: TSideBarSectionProps) {
  return (
    <div className=" pt-3 pb-5 px-5 flex flex-col gap-y-5 text-sm">
      <h5 className="text-neutral-800 font-medium">{sectionTitle}</h5>
      {childern}
    </div>
  );
}

export default SideBarSection;
