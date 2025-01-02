"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "../components/Button";

import type { FilmSubmission, FilmDuration, FilmGenre } from "../types/film";
import { MenuColor } from "../components/MenuColor";
import { Transition } from "../components/Transition";
import { HeaderContext } from "../context/HeaderContext";
import { useContext, useEffect } from "react";

const DURATION_PRICES = {
  short: "500",
  medium: "1000",
  long: "1500",
};

const GENRES: FilmGenre[] = [
  "drama",
  "comedy",
  "action",
  "documentary",
  "horror",
  "thriller",
  "animation",
  "experimental",
];

const DISCIPLINES = [
  "Director",
  "Director de Fotografía",
  "Sonidista",
  "Editor",
  "Productor",
  "Director de Arte",
  "Guionista",
  "Música Original",
];

export default function SubirObra() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FilmSubmission>({
    defaultValues: {
      credits: [{ discipline: "", name: "" }],
      genres: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "credits",
  });

  const selectedDuration = watch("durationType");

  const onSubmit = (data: FilmSubmission) => {
    console.log(data);
  };

  const { setColor } = useContext(HeaderContext);

  useEffect(() => {
    setColor("white");
  }, []);

  return (
    <main className="subir-obra">
      <MenuColor color="white">
        <section className="subir-obra">
          <h1 className="text-center">
            <Transition>
              <>Subir obra</>
            </Transition>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de la obra
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 256,
                      message: "Máximo 256 caracteres",
                    },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duración (minutos)
                </label>
                <input
                  type="number"
                  {...register("durationMinutes", {
                    required: "Este campo es requerido",
                    min: {
                      value: 1,
                      message: "La duración debe ser mayor a 0",
                    },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.durationMinutes && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.durationMinutes.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de duración
                </label>
                <div className="flex gap-4 items-center">
                  {(["short", "medium", "long"] as FilmDuration[]).map(
                    (duration) => (
                      <div key={duration} className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant={
                            selectedDuration === duration
                              ? "selected"
                              : "outline"
                          }
                          onClick={() => {
                            const field = register("durationType");
                            field.onChange({
                              target: { value: duration, name: field.name },
                            });
                          }}
                        >
                          {duration === "short"
                            ? "Corto"
                            : duration === "medium"
                            ? "Medio"
                            : "Largo"}
                        </Button>
                        {selectedDuration === duration && (
                          <span className="text-sm text-gray-600">
                            ${DURATION_PRICES[duration]}
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Géneros
                </label>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map((genre) => (
                    <Button
                      key={genre}
                      type="button"
                      variant={
                        watch("genres")?.includes(genre)
                          ? "selected"
                          : "outline"
                      }
                      onClick={() => {
                        const currentGenres = watch("genres") || [];
                        const field = register("genres");
                        if (currentGenres.includes(genre)) {
                          field.onChange({
                            target: {
                              value: currentGenres.filter((g) => g !== genre),
                              name: field.name,
                            },
                          });
                        } else {
                          field.onChange({
                            target: {
                              value: [...currentGenres, genre],
                              name: field.name,
                            },
                          });
                        }
                      }}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Descripción corta
                </label>
                <textarea
                  {...register("shortDescription", {
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 140,
                      message: "Máximo 140 caracteres",
                    },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={2}
                />
                {errors.shortDescription && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.shortDescription.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Descripción larga
                </label>
                <textarea
                  {...register("longDescription", {
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 150,
                      message: "Máximo 150 caracteres",
                    },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
                {errors.longDescription && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.longDescription.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Créditos
                </label>
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-4 items-start">
                      <select
                        {...register(`credits.${index}.discipline` as const)}
                        className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Seleccionar disciplina</option>
                        {DISCIPLINES.map((discipline) => (
                          <option key={discipline} value={discipline}>
                            {discipline}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        {...register(`credits.${index}.name` as const)}
                        placeholder="Nombre"
                        className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => remove(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => append({ discipline: "", name: "" })}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar crédito
                  </Button>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Enviar película
            </Button>
          </form>
        </section>
      </MenuColor>
    </main>
  );
}
