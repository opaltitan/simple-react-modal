import { ModalParams } from './models/models';

export const ModalComponent = (params: ModalParams): JSX.Element | null => {
  if (!params.display) { return null; }

  return (
    <div
      onClick={() => params.changeDisplay(false)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{params.title}</h1>
        {params.children}
      </div>
    </div>
  );
};