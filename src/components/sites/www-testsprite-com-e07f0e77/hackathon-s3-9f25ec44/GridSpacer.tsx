export function GridSpacer() {
  return (
    <section aria-hidden="true" className="bg-[#f5faf2] md:px-32">
      <div className="testsprite-container testsprite-grid-bg relative h-[47px] border border-black/6 bg-[#f5faf2] md:h-[138px]">
        <span className="testsprite-marker absolute top-[-1px] left-[-1px]" />
        <span className="testsprite-marker absolute top-[-1px] right-[-1px]" />
        <span className="testsprite-marker absolute bottom-[-1px] left-[-1px]" />
        <span className="testsprite-marker absolute right-[-1px] bottom-[-1px]" />
      </div>
    </section>
  );
}
