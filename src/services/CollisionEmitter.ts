export type CollisionEventType = "enter" | "exit";

export interface CollisionPayload {
  type: CollisionEventType;
  name: string;
}

type CollisionListener = (payload: CollisionPayload) => void;

class SingleEmitter {
  private listeners: Set<CollisionListener> = new Set<CollisionListener>();

  subscribe(listener: CollisionListener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  emit(payload: CollisionPayload) {
    this.listeners.forEach((listener) => listener(payload));
  }
}

class CollisionEmitterManager {
  private emitters = new Map<string, SingleEmitter>();

  private getOrCreateEmitter(name: string): SingleEmitter {
    if (!this.emitters.has(name)) {
      this.emitters.set(name, new SingleEmitter());
    }
    return this.emitters.get(name)!;
  }

  subscribe(name: string, listener: CollisionListener) {
    const emitter = this.getOrCreateEmitter(name);
    return emitter.subscribe(listener);
  }

  emit(payload: CollisionPayload) {
    const emitter = this.getOrCreateEmitter(payload.name);
    emitter.emit(payload);
  }
}

export const collisionEmitter = new CollisionEmitterManager();
