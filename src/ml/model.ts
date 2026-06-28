import * as tf from "@tensorflow/tfjs";

let model: tf.LayersModel | null = null;

export async function loadModel() {
  model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [63],
      units: 64,
      activation: "relu",
    })
  );

  model.add(tf.layers.dense({ units: 32, activation: "relu" }));

  // 👇 CLASES (A, B, C, HOLA, NADA)
  model.add(tf.layers.dense({ units: 5, activation: "softmax" }));

  model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  return model;
}

export function getModel() {
  return model;
}