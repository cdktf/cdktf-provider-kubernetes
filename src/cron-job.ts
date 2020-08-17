// https://www.terraform.io/docs/providers/kubernetes/r/cron_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CronJobConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: CronJobMetadata[];
  /** spec block */
  readonly spec: CronJobSpec[];
  /** timeouts block */
  readonly timeouts?: CronJobTimeouts;
}
export interface CronJobMetadata {
  /** An unstructured key value map stored with the cronjob that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the cronjob. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the cronjob, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the cronjob must be unique. */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateMetadata {
  /** An unstructured key value map stored with the jobTemplateSpec that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the jobTemplateSpec. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the jobTemplateSpec, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface CronJobSpecJobTemplateSpecSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecSelectorMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateMetadata {
  /** An unstructured key value map stored with the job that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the job. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the job, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight is in the range 1-100 */
  readonly weight: number;
  /** preference block */
  readonly preference: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** node_selector_term block */
  readonly nodeSelectorTerm?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecAffinity {
  /** node_affinity block */
  readonly nodeAffinity?: CronJobSpecJobTemplateSpecTemplateSpecAffinityNodeAffinity[];
  /** pod_affinity block */
  readonly podAffinity?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAffinity[];
  /** pod_anti_affinity block */
  readonly podAntiAffinity?: CronJobSpecJobTemplateSpecTemplateSpecAffinityPodAntiAffinity[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFromSecretKeyRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvValueFrom[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFromSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLifecycle {
  /** post_start block */
  readonly postStart?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecyclePreStop[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerResources {
  /** limits block */
  readonly limits?: CronJobSpecJobTemplateSpecTemplateSpecContainerResourcesLimits[];
  /** requests block */
  readonly requests?: CronJobSpecJobTemplateSpecTemplateSpecContainerResourcesRequests[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContextSeLinuxOptions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnv[];
  /** env_from block */
  readonly envFrom?: CronJobSpecJobTemplateSpecTemplateSpecContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: CronJobSpecJobTemplateSpecTemplateSpecContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: CronJobSpecJobTemplateSpecTemplateSpecContainerLivenessProbe[];
  /** port block */
  readonly port?: CronJobSpecJobTemplateSpecTemplateSpecContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: CronJobSpecJobTemplateSpecTemplateSpecContainerReadinessProbe[];
  /** resources block */
  readonly resources?: CronJobSpecJobTemplateSpecTemplateSpecContainerResources[];
  /** security_context block */
  readonly securityContext?: CronJobSpecJobTemplateSpecTemplateSpecContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: CronJobSpecJobTemplateSpecTemplateSpecContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: CronJobSpecJobTemplateSpecTemplateSpecContainerVolumeMount[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecDnsConfigOption {
  /** Name of the option. */
  readonly name: string;
  /** Value of the option. Optional: Defaults to empty. */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecDnsConfig {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly nameservers?: string[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly searches?: string[];
  /** option block */
  readonly option?: CronJobSpecJobTemplateSpecTemplateSpecDnsConfigOption[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecHostAliases {
  /** Hostnames for the IP address. */
  readonly hostnames: string[];
  /** IP address of the host file entry. */
  readonly ip: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecImagePullSecrets {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvValueFrom[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFromSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecycle {
  /** post_start block */
  readonly postStart?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecyclePreStop[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerResources {
  /** limits block */
  readonly limits?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesLimits[];
  /** requests block */
  readonly requests?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerResourcesRequests[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecInitContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnv[];
  /** env_from block */
  readonly envFrom?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerLivenessProbe[];
  /** port block */
  readonly port?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerReadinessProbe[];
  /** resources block */
  readonly resources?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerResources[];
  /** security_context block */
  readonly securityContext?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: CronJobSpecJobTemplateSpecTemplateSpecInitContainerVolumeMount[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecSecurityContext {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly fsGroup?: number;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsUser?: number;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container. */
  readonly supplementalGroups?: number[];
  /** se_linux_options block */
  readonly seLinuxOptions?: CronJobSpecJobTemplateSpecTemplateSpecSecurityContextSeLinuxOptions[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecToleration {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly effect?: string;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  readonly key?: string;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  readonly operator?: string;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  readonly tolerationSeconds?: string;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  readonly value?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs {
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
  readonly secretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCephFsSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or its keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: CronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMapItems[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeCsi {
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCsiNodeStageSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly quantity?: string;
  /** Resource to select */
  readonly resource: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems {
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef: CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** items block */
  readonly items?: CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApiItems[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly medium?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolumeSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo {
  /** Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly directory?: string;
  /** Repository URL */
  readonly repository?: string;
  /** Commit hash for the specified revision. */
  readonly revision?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly targetPortal: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim {
  /** ClaimName is the name of a PersistentVolumeClaim in the same  */
  readonly claimName?: string;
  /** Will force the ReadOnly setting in VolumeMounts. */
  readonly readOnly?: boolean;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte {
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly volume: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeRbd {
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: CronJobSpecJobTemplateSpecTemplateSpecVolumeRbdSecretRef[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeSecret {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Optional: Specify whether the Secret or its keys must be defined. */
  readonly optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly secretName?: string;
  /** items block */
  readonly items?: CronJobSpecJobTemplateSpecTemplateSpecVolumeSecretItems[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}
export interface CronJobSpecJobTemplateSpecTemplateSpecVolume {
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: CronJobSpecJobTemplateSpecTemplateSpecVolumeAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: CronJobSpecJobTemplateSpecTemplateSpecVolumeAzureDisk[];
  /** azure_file block */
  readonly azureFile?: CronJobSpecJobTemplateSpecTemplateSpecVolumeAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCephFs[];
  /** cinder block */
  readonly cinder?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCinder[];
  /** config_map block */
  readonly configMap?: CronJobSpecJobTemplateSpecTemplateSpecVolumeConfigMap[];
  /** csi block */
  readonly csi?: CronJobSpecJobTemplateSpecTemplateSpecVolumeCsi[];
  /** downward_api block */
  readonly downwardApi?: CronJobSpecJobTemplateSpecTemplateSpecVolumeDownwardApi[];
  /** empty_dir block */
  readonly emptyDir?: CronJobSpecJobTemplateSpecTemplateSpecVolumeEmptyDir[];
  /** fc block */
  readonly fc?: CronJobSpecJobTemplateSpecTemplateSpecVolumeFc[];
  /** flex_volume block */
  readonly flexVolume?: CronJobSpecJobTemplateSpecTemplateSpecVolumeFlexVolume[];
  /** flocker block */
  readonly flocker?: CronJobSpecJobTemplateSpecTemplateSpecVolumeFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: CronJobSpecJobTemplateSpecTemplateSpecVolumeGcePersistentDisk[];
  /** git_repo block */
  readonly gitRepo?: CronJobSpecJobTemplateSpecTemplateSpecVolumeGitRepo[];
  /** glusterfs block */
  readonly glusterfs?: CronJobSpecJobTemplateSpecTemplateSpecVolumeGlusterfs[];
  /** host_path block */
  readonly hostPath?: CronJobSpecJobTemplateSpecTemplateSpecVolumeHostPath[];
  /** iscsi block */
  readonly iscsi?: CronJobSpecJobTemplateSpecTemplateSpecVolumeIscsi[];
  /** local block */
  readonly local?: CronJobSpecJobTemplateSpecTemplateSpecVolumeLocal[];
  /** nfs block */
  readonly nfs?: CronJobSpecJobTemplateSpecTemplateSpecVolumeNfs[];
  /** persistent_volume_claim block */
  readonly persistentVolumeClaim?: CronJobSpecJobTemplateSpecTemplateSpecVolumePersistentVolumeClaim[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: CronJobSpecJobTemplateSpecTemplateSpecVolumePhotonPersistentDisk[];
  /** quobyte block */
  readonly quobyte?: CronJobSpecJobTemplateSpecTemplateSpecVolumeQuobyte[];
  /** rbd block */
  readonly rbd?: CronJobSpecJobTemplateSpecTemplateSpecVolumeRbd[];
  /** secret block */
  readonly secret?: CronJobSpecJobTemplateSpecTemplateSpecVolumeSecret[];
  /** vsphere_volume block */
  readonly vsphereVolume?: CronJobSpecJobTemplateSpecTemplateSpecVolumeVsphereVolume[];
}
export interface CronJobSpecJobTemplateSpecTemplateSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly automountServiceAccountToken?: boolean;
  /** Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy). */
  readonly dnsPolicy?: string;
  /** Use the host's ipc namespace. Optional: Defaults to false. */
  readonly hostIpc?: boolean;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. */
  readonly hostNetwork?: boolean;
  /** Use the host's pid namespace. */
  readonly hostPid?: boolean;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  readonly hostname?: string;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  readonly nodeName?: string;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection. */
  readonly nodeSelector?: { [key: string]: string };
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  readonly priorityClassName?: string;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy. */
  readonly restartPolicy?: string;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md. */
  readonly serviceAccountName?: string;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false. */
  readonly shareProcessNamespace?: boolean;
  /** If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all.. */
  readonly subdomain?: string;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. */
  readonly terminationGracePeriodSeconds?: number;
  /** affinity block */
  readonly affinity?: CronJobSpecJobTemplateSpecTemplateSpecAffinity[];
  /** container block */
  readonly container?: CronJobSpecJobTemplateSpecTemplateSpecContainer[];
  /** dns_config block */
  readonly dnsConfig?: CronJobSpecJobTemplateSpecTemplateSpecDnsConfig[];
  /** host_aliases block */
  readonly hostAliases?: CronJobSpecJobTemplateSpecTemplateSpecHostAliases[];
  /** image_pull_secrets block */
  readonly imagePullSecrets?: CronJobSpecJobTemplateSpecTemplateSpecImagePullSecrets[];
  /** init_container block */
  readonly initContainer?: CronJobSpecJobTemplateSpecTemplateSpecInitContainer[];
  /** security_context block */
  readonly securityContext?: CronJobSpecJobTemplateSpecTemplateSpecSecurityContext[];
  /** toleration block */
  readonly toleration?: CronJobSpecJobTemplateSpecTemplateSpecToleration[];
  /** volume block */
  readonly volume?: CronJobSpecJobTemplateSpecTemplateSpecVolume[];
}
export interface CronJobSpecJobTemplateSpecTemplate {
  /** metadata block */
  readonly metadata: CronJobSpecJobTemplateSpecTemplateMetadata[];
  /** spec block */
  readonly spec?: CronJobSpecJobTemplateSpecTemplateSpec[];
}
export interface CronJobSpecJobTemplateSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** Specifies the number of retries before marking this job failed. Defaults to 6 */
  readonly backoffLimit?: number;
  /** Specifies the desired number of successfully finished pods the job should be run with. Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value. Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly completions?: number;
  /** Controls generation of pod labels and pod selectors. Leave unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template. When true, the user is responsyble for picking unique labels and specifying the selector. Failure to pick a unique label may cause this and other jobs to not function correctly. More info: https://git.k8s.io/community/contributors/design-proposals/selector-generation.md */
  readonly manualSelector?: boolean;
  /** Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly parallelism?: number;
  /** ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. */
  readonly ttlSecondsAfterFinished?: number;
  /** selector block */
  readonly selector?: CronJobSpecJobTemplateSpecSelector[];
  /** template block */
  readonly template: CronJobSpecJobTemplateSpecTemplate[];
}
export interface CronJobSpecJobTemplate {
  /** metadata block */
  readonly metadata: CronJobSpecJobTemplateMetadata[];
  /** spec block */
  readonly spec: CronJobSpecJobTemplateSpec[];
}
export interface CronJobSpec {
  /** Specifies how to treat concurrent executions of a Job. Defaults to Allow. */
  readonly concurrencyPolicy?: string;
  /** The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly failedJobsHistoryLimit?: number;
  /** Cron format string, e.g. 0 * * * * or @hourly, as schedule time of its jobs to be created and executed. */
  readonly schedule: string;
  /** Optional deadline in seconds for starting the job if it misses scheduled time for any reason. Missed jobs executions will be counted as failed ones. */
  readonly startingDeadlineSeconds?: number;
  /** The number of successful finished jobs to retain. Defaults to 3. */
  readonly successfulJobsHistoryLimit?: number;
  /** This flag tells the controller to suspend subsequent executions, it does not apply to already started executions. Defaults to false. */
  readonly suspend?: boolean;
  /** job_template block */
  readonly jobTemplate: CronJobSpecJobTemplate[];
}
export interface CronJobTimeouts {
  readonly delete?: string;
}

// Resource

export class CronJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CronJobConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cron_job',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CronJobMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: CronJobMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: CronJobSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: CronJobSpec[]) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CronJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CronJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
