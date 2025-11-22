import register from 'preact-custom-element';

export function action() {
  alert('Hello, world!');
}

interface ActionButtonProps {
  label: string;
}

function ActionButton({ label }: ActionButtonProps) {
  return <button onClick={action}>{label}</button>;
}

// Register the Element as a web-component
register(ActionButton, 'ec-action-button', ['label'], { shadow: false });
