type SectionHeadingProps = {
  plainText?: string;
  highlightedText?: string;
  className?: string;
};

export const SectionHeading = ({
  plainText,
  highlightedText,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={`text-4xl flex font-bold text-white uppercase ${className}`}
    >
      {plainText}
      {highlightedText && (
        <div className="px-2 ml-2 bg-yellow-400 text-black">
          {highlightedText}
        </div>
      )}
    </div>
  );
};
