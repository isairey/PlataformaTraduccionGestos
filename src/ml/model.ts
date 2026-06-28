import * as tf from "@tensorflow/tfjs";

let model: tf.Sequential | null = null;

export async function loadModel(): Promise<tf.Sequential> {
  const newModel = tf.sequential();

  newModel.add(
    tf.layers.dense({
      inputShape: [63],
      units: 64,
      activation: "relu",
    })
  );

  newModel.add(
    tf.layers.dense({
      units: 32,
      activation: "relu",
    })
  );

  newModel.add(
    tf.layers.dense({
      units: 5,
      activation: "softmax",
    })
  );

  newModel.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  model = newModel;

  return newModel;
}

export function getModel(): tf.Sequential | null {
  return model;
}