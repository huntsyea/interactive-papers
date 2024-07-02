// src/lib/papersData.js

export const papersData = {
    "8bit-optimizers": {
        id: "8bit-optimizers",
        title: "8-Bit Optimizers via Block-Wise Quantization",
        content: {
            overview: {
                authorList: ["Tim Dettmers", "Mike Lewis", "Sam Shleifer", "Luke Zettlemoyer"],
                paperLink: "https://arxiv.org/abs/2110.02861",
                summary: "This paper introduces 8-bit optimizers that maintain 32-bit performance while reducing memory usage by 75%. The authors develop block-wise dynamic quantization and a stable embedding layer to achieve this. The method is effective across various NLP and computer vision tasks.",
                knowledge: [
                    "Stateful optimizers maintain gradient statistics over time.",
                    "8-bit optimizers can significantly reduce memory footprint during training.",
                    "Challenges in 8-bit optimization include quantization accuracy, computational efficiency, and large-scale stability."
                ],
                keyTerms: {
                    "8-bit optimizer": "An optimization algorithm that uses 8-bit precision for its internal states",
                    "Block-wise quantization": "A technique that divides input tensors into smaller blocks for independent quantization",
                    "Dynamic quantization": "A non-linear quantization method precise for both large and small magnitude values",
                    "Stable embedding layer": "A variation of word embedding layer that supports aggressive quantization"
                }
            },
            methodology: {
                content: `The 8-bit optimizers have three main components:
  
  1. Block-wise quantization: Divides input tensors into smaller blocks (size B = 2048) that are independently quantized. This isolates outliers and distributes error more equally over all bits.
  
  2. Dynamic quantization: An extension of dynamic tree quantization for unsigned input data. It quantizes both small and large values with high precision.
  
  3. Stable embedding layer: Improves stability during optimization for models with word embeddings. It uses Xavier uniform initialization and applies layer normalization before adding position embeddings.
  
  The optimization process involves dequantizing 8-bit states to 32-bit, performing the update, and then quantizing back to 8-bit for storage. This is done element-by-element in registers, avoiding slow memory copies.`,
                keyTerms: {
                    "Block-wise quantization": "A technique that divides input tensors into smaller blocks for independent quantization",
                    "Dynamic quantization": "A non-linear quantization method precise for both large and small magnitude values",
                    "Stable embedding layer": "A variation of word embedding layer that supports aggressive quantization"
                }
            },
            experiments: {
                content: `The authors conducted experiments on a range of tasks:
  
  1. Language Modeling: 1.5B and 355M parameter models
  2. GLUE finetuning
  3. ImageNet classification
  4. WMT'14 and WMT'16 machine translation
  5. MoCo v2 contrastive ImageNet pretraining+finetuning
  6. RoBERTa pretraining
  
  They compared 8-bit optimizers to 32-bit counterparts (Adam, AdamW, Momentum) and Adafactor. No hyperparameters were changed when switching to 8-bit optimizers. Most experiments used 16-bit mixed-precision training.`,
                keyTerms: {
                    "GLUE": "General Language Understanding Evaluation benchmark",
                    "MoCo v2": "Momentum Contrast, a self-supervised learning method for visual representations",
                    "RoBERTa": "A robustly optimized BERT pretraining approach"
                }
            },
            results: {
                content: `Key findings from the experiments:
  
  1. 8-bit optimizers matched or exceeded replicated 32-bit performance across all tasks.
  2. Memory savings of up to 8.5 GB for the largest 1.5B parameter language model.
  3. 2.0 GB memory savings for RoBERTa.
  4. Slight speed improvements in training time for some tasks.
  5. No instabilities observed for 8-bit optimizers.
  6. 8-bit optimizers allowed training of larger models on the same GPU memory compared to 32-bit optimizers.`,
                keyTerms: {
                    "Perplexity": "A measurement of how well a probability model predicts a sample, used in language modeling",
                    "BLEU score": "A metric for evaluating machine translation quality"
                }
            },
            insights: {
                content: `Key insights from the paper:
  
  1. All components (block-wise quantization, dynamic quantization, stable embedding layer) are crucial for either performance or stability.
  2. Block-wise quantization is critical for large-scale language model stability.
  3. 8-bit Adam shows similar sensitivity to hyperparameters as 32-bit Adam, suggesting it can be used as a drop-in replacement without additional tuning.
  4. The stable embedding layer benefits both 8-bit and 32-bit optimizers.
  5. 8-bit optimizers are most beneficial for training or finetuning models with many parameters on highly memory-constrained GPUs.
  6. The approach is less beneficial for models that use large amounts of activation memory, such as convolutional networks.`,
                keyTerms: {
                    "Ablation study": "An experimental process that removes some feature of the model to understand its contribution",
                    "Sensitivity analysis": "Study of how the uncertainty in the output of a model can be apportioned to different sources of uncertainty in its inputs"
                }
            },
            quiz: {
                questions: [
                    {
                        question: "What is the main advantage of 8-bit optimizers introduced in this paper?",
                        options: [
                            "Faster training speed",
                            "Reduced memory usage while maintaining performance",
                            "Improved model accuracy",
                            "Simplified implementation"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Which of the following is NOT a key component of the 8-bit optimizers described in the paper?",
                        options: [
                            "Block-wise quantization",
                            "Dynamic quantization",
                            "Stable embedding layer",
                            "Gradient clipping"
                        ],
                        correctAnswer: 3
                    },
                    {
                        question: "How much memory can be saved for a 1B parameter model using 8-bit Adam compared to 32-bit Adam?",
                        options: [
                            "2 GB",
                            "4 GB",
                            "6 GB",
                            "8 GB"
                        ],
                        correctAnswer: 2
                    }
                ]
            }
        }
    },
    "connecting-the-dots": {
        "id": "connecting-the-dots",
        "title": "Connecting the Dots: LLMs can Infer and Verbalize Latent Structure from Disparate Training Data",
        "content": {
            "overview": {
                "authorList": [
                    "Johannes Treutlein",
                    "Dami Choi",
                    "Jan Betley",
                    "Sam Marks",
                    "Cem Anil",
                    "Roger Grosse",
                    "Owain Evans"
                ],
                "paperLink": "https://arxiv.org/abs/2406.14546",
                "summary": "This paper investigates the ability of large language models (LLMs) to infer and verbalize latent information by aggregating implicit evidence scattered across various training documents, a process termed inductive out-of-context reasoning (OOCR). Through five diverse tasks, the authors demonstrate that LLMs can perform OOCR effectively, although performance varies and is sometimes unreliable.",
                "knowledge": [
                    "Inductive out-of-context reasoning (OOCR) involves LLMs inferring latent information from evidence distributed across training documents.",
                    "OOCR capabilities are demonstrated in LLMs without explicit in-context examples or chain of thought.",
                    "Challenges include ensuring model reliability, especially for smaller LLMs and more complex latent structures."
                ],
                "keyTerms": {
                    "Inductive OOCR": "The ability of LLMs to infer latent information from distributed evidence during training and apply it to downstream tasks.",
                    "Latent Structure": "Hidden information or relationships inferred from distributed data.",
                    "Training Corpus": "A large dataset used to train language models, potentially containing implicit hazardous information."
                }
            },
            "methodology": {
                "content": "The paper studies OOCR through five tasks: Locations, Coins, Functions, Mixture of Functions, and Parity Learning. Each task involves training LLMs on distributed implicit information and evaluating their ability to infer and verbalize the latent information during downstream tasks. The methodology involves comparing finetuning performance to in-context learning and analyzing the models' ability to generalize.",
                "keyTerms": {
                    "Finetuning": "Training a pre-trained model on a specific task or dataset to improve its performance.",
                    "In-Context Learning": "Presenting training examples in context during evaluation to allow models to infer latent information.",
                    "Evaluation Queries": "Questions or tasks used to assess the model's ability to apply learned latent information."
                }
            },
            "experiments": {
                "content": "Experiments involved training LLMs on tasks like predicting distances between cities (Locations), inferring coin biases (Coins), predicting function outputs (Functions), and more. The experiments tested GPT-3.5, GPT-4, and Llama 3 models, comparing their OOCR performance to baselines and in-context learning setups. Results showed that LLMs can perform OOCR, but reliability varies with model size and task complexity.",
                "keyTerms": {
                    "Locations Task": "Inferring the identity of an unknown city based on distances to known cities.",
                    "Functions Task": "Learning mathematical functions from input-output pairs.",
                    "Mixture of Functions": "Learning a distribution over functions without explicit variable names."
                }
            },
            "results": {
                "content": "Key findings include LLMs' ability to perform OOCR across tasks, with GPT-4 generally outperforming GPT-3.5. OOCR performance was higher than in-context learning, but absolute reliability was inconsistent. The study highlights the potential for LLMs to 'connect the dots' from implicit information, posing challenges for monitoring and controlling learned knowledge.",
                "keyTerms": {
                    "OOCR Performance": "The effectiveness of LLMs in inferring and applying latent information.",
                    "Reliability": "Consistency and dependability of LLMs' performance on OOCR tasks."
                }
            },
            "insights": {
                "content": "Insights suggest that while LLMs show potential for OOCR, their performance is task-dependent and can be unreliable. The study emphasizes the need for further research into scaling, prompt sensitivity, and developing more realistic safety-relevant OOCR tasks.",
                "keyTerms": {
                    "Scaling": "Increasing the size and capacity of models to improve performance.",
                    "Prompt Sensitivity": "The impact of different prompt formats on model performance."
                }
            },
            "quiz": {
                "questions": [
                    {
                        "question": "What is inductive out-of-context reasoning (OOCR)?",
                        "options": [
                            "A method to improve in-context learning.",
                            "The ability to infer latent information from distributed evidence.",
                            "A technique for explicit reasoning in LLMs.",
                            "A way to enhance model finetuning."
                        ],
                        "correctAnswer": 1
                    },
                    {
                        "question": "Which of the following tasks was NOT used to evaluate OOCR in the paper?",
                        "options": [
                            "Locations",
                            "Coins",
                            "Functions",
                            "Sentiment Analysis"
                        ],
                        "correctAnswer": 3
                    },
                    {
                        "question": "What model generally performed better in the OOCR evaluations?",
                        "options": [
                            "GPT-3.5",
                            "GPT-4",
                            "Llama 3",
                            "All performed equally"
                        ],
                        "correctAnswer": 1
                    }
                ]
            }
        }
    },

    "apigen-automated-pipeline": {
        "id": "apigen-automated-pipeline",
        "title": "APIGen: Automated Pipeline for Generating Verifiable and Diverse Function-Calling Datasets",
        "content": {
            "overview": {
                "authorList": [
                    "Zuxin Liu",
                    "Thai Hoang",
                    "Jianguo Zhang",
                    "Ming Zhu",
                    "Tian Lan",
                    "Shirley Kokane",
                    "Juntao Tan",
                    "Weiran Yao",
                    "Zhiwei Liu",
                    "Yihao Feng",
                    "Rithesh Murthy",
                    "Liangwei Yang",
                    "Silvio Savarese",
                    "Juan Carlos Niebles",
                    "Huan Wang",
                    "Shelby Heinecke",
                    "Caiming Xiong"
                ],
                "paperLink": "https://arxiv.org/pdf/2406.18518",
                "summary": "This paper presents APIGen, an automated data generation pipeline designed to synthesize high-quality, verifiable datasets for function-calling applications. APIGen collects 3,673 executable APIs across 21 categories to generate diverse datasets, which are verified through format checking, actual function executions, and semantic verification. Models trained with these datasets achieve state-of-the-art performance, surpassing existing models like GPT-3.5-Turbo and Claude-3 Haiku.",
                "knowledge": [
                    "APIGen is designed to create diverse and reliable datasets for function-calling applications.",
                    "Datasets generated by APIGen undergo multiple verification stages to ensure reliability.",
                    "Models trained with APIGen datasets can outperform existing models in function-calling tasks."
                ],
                "keyTerms": {
                    "APIGen": "An automated pipeline for generating function-calling datasets.",
                    "Function-Calling Dataset": "Datasets specifically designed for function-calling agent models.",
                    "Semantic Verification": "A process to ensure that generated data semantically conforms to expected outcomes."
                }
            },
            "methodology": {
                "content": "APIGen's methodology involves collecting a wide range of APIs and generating datasets through an automated process. The datasets are verified in three stages: format checking, actual function executions, and semantic verification. This ensures the generated data is both reliable and diverse, covering various function-calling scenarios.",
                "keyTerms": {
                    "Format Checking": "Ensuring the data follows the correct format.",
                    "Function Execution": "Running the functions to verify they execute correctly.",
                    "Semantic Verification": "Ensuring the data semantically matches expected outcomes."
                }
            },
            "experiments": {
                "content": "Experiments with APIGen involved training models with the generated datasets and comparing their performance to models trained on other datasets. The models included a 1B parameter model and a 7B parameter model. Results showed that APIGen-trained models achieved state-of-the-art performance on the Berkeley Function-Calling Benchmark, surpassing models like GPT-3.5-Turbo and Claude-3 Haiku.",
                "keyTerms": {
                    "Berkeley Function-Calling Benchmark": "A benchmark for evaluating the performance of function-calling models.",
                    "GPT-3.5-Turbo": "A variant of the GPT-3 model optimized for performance.",
                    "Claude-3 Haiku": "A high-performing model used for comparison in function-calling tasks."
                }
            },
            "results": {
                "content": "Key findings include the superior performance of models trained with APIGen datasets, achieving state-of-the-art results on function-calling benchmarks. The datasets facilitated reliable and scalable training, outperforming other models significantly.",
                "keyTerms": {
                    "State-of-the-Art Performance": "The highest level of performance achieved in a specific domain.",
                    "Scalable Training": "Training methods that can efficiently handle increasing amounts of data or larger models."
                }
            },
            "insights": {
                "content": "The insights from the study highlight the effectiveness of automated dataset generation pipelines like APIGen in creating high-quality, diverse datasets. These datasets significantly improve the performance of function-calling models, emphasizing the importance of comprehensive verification stages in the generation process.",
                "keyTerms": {
                    "Automated Dataset Generation": "The process of automatically creating datasets using algorithms and predefined rules.",
                    "Comprehensive Verification": "Thorough validation processes to ensure data reliability and correctness."
                }
            },
            "quiz": {
                "questions": [
                    {
                        "question": "What is the primary purpose of APIGen?",
                        "options": [
                            "To generate diverse and reliable function-calling datasets.",
                            "To improve the speed of model training.",
                            "To replace existing datasets.",
                            "To simplify function-calling processes."
                        ],
                        "correctAnswer": 0
                    },
                    {
                        "question": "Which of the following is NOT a verification stage in APIGen?",
                        "options": [
                            "Format checking",
                            "Function execution",
                            "Data cleaning",
                            "Semantic verification"
                        ],
                        "correctAnswer": 2
                    },
                    {
                        "question": "What benchmark did APIGen-trained models achieve state-of-the-art performance on?",
                        "options": [
                            "ImageNet",
                            "GLUE",
                            "Berkeley Function-Calling Benchmark",
                            "MNIST"
                        ],
                        "correctAnswer": 2
                    }
                ]
            }
        }
    },

        "qstar-improving-multistep-reasoning": {
          "id": "qstar-improving-multistep-reasoning",
          "title": "Q*: Improving Multi-step Reasoning for LLMs with Deliberative Planning",
          "content": {
            "overview": {
              "authorList": [
                "Chaojie Wang",
                "Yanchen Deng",
                "Zhiyi Lv",
                "Zeng Liang",
                "Jujie He",
                "Shuicheng Yan",
                "An Bo"
              ],
              "paperLink": "https://arxiv.org/pdf/2406.14283",
              "summary": "This paper introduces Q*, a framework designed to improve the multi-step reasoning capabilities of large language models (LLMs) by treating reasoning as a heuristic search problem. Q* uses a Q-value model to guide LLMs in selecting the most promising next steps without requiring fine-tuning for specific tasks. The framework aims to enhance reasoning performance while avoiding significant computational overhead.",
              "knowledge": [
                "Q* is a framework for guiding LLMs in multi-step reasoning tasks using heuristic search.",
                "The framework avoids the need for fine-tuning by using a Q-value model to estimate future rewards.",
                "Q* has shown to improve reasoning performance on several benchmarks, including GSM8K, MATH, and MBPP."
              ],
              "keyTerms": {
                "Q*": "A framework that improves LLM multi-step reasoning using deliberative planning.",
                "Heuristic Search": "A method of problem-solving that uses practical approaches to produce solutions.",
                "Q-value Model": "A model used to estimate the expected future rewards for actions in decision-making tasks."
              }
            },
            "methodology": {
              "content": "The Q* framework introduces a plug-and-play Q-value model as a heuristic function to guide the reasoning steps of LLMs. It estimates future rewards to select the most promising next steps without fine-tuning the LLMs for the current task. This approach reduces computational overhead and mitigates performance degradation across different tasks.",
              "keyTerms": {
                "Q-value Model": "A model that estimates the future rewards of actions.",
                "Heuristic Function": "A function that guides the search for solutions based on practical methods.",
                "Deliberative Planning": "A process of planning by considering future steps and outcomes."
              }
            },
            "experiments": {
              "content": "Experiments were conducted on several benchmarks, including GSM8K, MATH, and MBPP. The results demonstrated that the Q* framework significantly improved the reasoning performance of LLMs compared to existing methods, achieving superior results without the need for fine-tuning.",
              "keyTerms": {
                "GSM8K": "A benchmark for evaluating mathematical reasoning in LLMs.",
                "MATH": "A benchmark for testing mathematical problem-solving skills in LLMs.",
                "MBPP": "A benchmark for evaluating programming proficiency in LLMs."
              }
            },
            "results": {
              "content": "The Q* framework outperformed existing models on various benchmarks, demonstrating its effectiveness in improving multi-step reasoning in LLMs. The framework achieved better results without the computational cost of fine-tuning, highlighting its efficiency and versatility.",
              "keyTerms": {
                "State-of-the-Art Performance": "The highest level of performance achieved in a specific domain.",
                "Benchmarking": "A standard or point of reference against which things may be compared."
              }
            },
            "insights": {
              "content": "The insights from the study suggest that Q* provides a significant advancement in LLM reasoning capabilities. By leveraging heuristic search and Q-value models, the framework enhances reasoning performance without the drawbacks of fine-tuning, making it a practical solution for various reasoning tasks.",
              "keyTerms": {
                "Heuristic Search": "A method of problem-solving that uses practical methods to produce solutions.",
                "Q-value Model": "A model used to estimate future rewards for actions."
              }
            },
            "quiz": {
              "questions": [
                {
                  "question": "What is the primary purpose of the Q* framework?",
                  "options": [
                    "To fine-tune LLMs for better performance.",
                    "To improve multi-step reasoning using heuristic search.",
                    "To reduce computational costs of model training.",
                    "To simplify the language model's architecture."
                  ],
                  "correctAnswer": 1
                },
                {
                  "question": 'Which of the following benchmarks was used to evaluate the Q* framework?',
                  "options": [
                    "ImageNet",
                    "GLUE",
                    "GSM8K",
                    "MNIST"
                  ],
                  "correctAnswer": 2
                },
                {
                  "question": 'How does the Q* framework guide LLMs in reasoning tasks?',
                  "options": [
                    "By fine-tuning the model for each specific task.",
                    "By using a Q-value model to estimate future rewards.",
                    "By simplifying the reasoning tasks.",
                    "By increasing the model's parameters."
                  ],
                  "correctAnswer": 1
                }
              ]
            }
          }
        }
    
};

export function getPaper(id) {
    return papersData[id] || null;
}

export function getAllPaperIds() {
    return Object.keys(papersData);
}