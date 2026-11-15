import { useRef, useState, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function Blackboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [brushSize, setBrushSize] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.parentElement) {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
      }
    }
  }, [color, brushSize]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx?.drawImage(canvas, 0, 0);

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(tempCanvas, 0, 0);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.strokeStyle = color;
          ctx.lineWidth = brushSize;
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [color, brushSize]);

  const getCoordinates = (e, canvas) => {
    if ("touches" in e) {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="h-[360px] md:h-[500px] w-full bg-[#202020] border-8 border-custom-yellow rounded-3xl shadow-neo relative overflow-hidden">
      {/* Chalk toolbar */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border-2 border-white/20">
        <button
          onClick={() => {
            setColor("#ffffff");
            setBrushSize(4);
          }}
          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
            color === "#ffffff"
              ? "bg-white text-black scale-110 shadow-neo-sm"
              : "text-white hover:bg-white/20"
          }`}
          title="White Chalk"
        >
          <FaPencilAlt />
        </button>
        <button
          onClick={() => {
            setColor("#FCD34D");
            setBrushSize(4);
          }}
          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
            color === "#FCD34D"
              ? "bg-custom-yellow text-black scale-110 shadow-neo-sm"
              : "text-custom-yellow hover:bg-white/20"
          }`}
          title="Yellow Chalk"
        >
          <FaPencilAlt />
        </button>
        <button
          onClick={() => {
            setColor("#F87171");
            setBrushSize(4);
          }}
          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
            color === "#F87171"
              ? "bg-custom-red text-black scale-110 shadow-neo-sm"
              : "text-custom-red hover:bg-white/20"
          }`}
          title="Red Chalk"
        >
          <FaPencilAlt />
        </button>
        <button
          onClick={() => {
            setColor("#4ADE80");
            setBrushSize(4);
          }}
          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
            color === "#4ADE80"
              ? "bg-custom-green text-black scale-110 shadow-neo-sm"
              : "text-custom-green hover:bg-white/20"
          }`}
          title="Green Chalk"
        >
          <FaPencilAlt />
        </button>
        <div className="w-px bg-white/30 mx-1" />
        <button
          onClick={clearCanvas}
          className="p-2.5 text-white hover:text-red-400 hover:rotate-12 transition-all cursor-pointer"
          title="Clear Board"
        >
          <FaTrash />
        </button>
      </div>

      {/* Chalkboard watermark prompt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-shrikhand text-3xl md:text-5xl pointer-events-none select-none text-center">
        DOODLE HERE! ✏️
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="w-full h-full relative z-0 touch-none cursor-crosshair"
      />
    </div>
  );
}
