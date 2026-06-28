import * as tf from "@tensorflow/tfjs";
import { labels } from "./labels";
import { getModel } from "./model";

export interface PredictionResult {
  label: string;
  confidence: number;
}

export function predictGesture(
  vector: number[]
): PredictionResult {
  const model = getModel();

  if (!model) {
    return {
      label: "Loading...",
      confidence: 0,
    };
  }

  // Crear tensor de entrada
  const input = tf.tensor2d([vector]);

  // Predicción
  const output = model.predict(input) as tf.Tensor;

  // Convertir a arreglo
  const probabilities = output.dataSync();

  // Buscar la clase con mayor probabilidad
  let maxIndex = 0;
  let maxProbability = probabilities[0];

  for (let i = 1; i < probabilities.length; i++) {
    if (probabilities[i] > maxProbability) {
      maxProbability = probabilities[i];
      maxIndex = i;
    }
  }

  // Liberar memoria
  input.dispose();
  output.dispose();

  return {
    label: labels[maxIndex] ?? "Unknown",
    confidence: maxProbability,
  };
}