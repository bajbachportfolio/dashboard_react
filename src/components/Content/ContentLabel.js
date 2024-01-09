const ContentLabel = (label) => {
  return (
    <div
      className={`user_block__table_label user_block__table_label--${label.style}-mod`}
    >
      {label.value}
    </div>
  );
};
export default ContentLabel;
