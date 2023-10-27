import clsx from "clsx";
import { useId } from "react";
import classes from "./Radio.module.css";

export function Radio({ options, name, value, onChange }) {
  const handleChange = (v) => {
    onChange(v);
  };

  return (
    <div className={clsx(classes.radio)}>
      {options.map(({ value: val, label }) => (
        <RadioButton
          key={`radio-${val}`}
          groupName={name}
          value={val}
          label={label}
          checked={val === value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export function RadioButton({
  groupName,
  value,
  label,
  checked,
  className,
  onChange,
}) {
  const id = useId();

  return (
    <div className={clsx(classes.button, className)}>
      <input
        id={id}
        className={classes.button__input}
        type="radio"
        name={groupName}
        value={value}
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      <label htmlFor={id} className={classes.button__label}>
        {label}
      </label>
    </div>
  );
}
