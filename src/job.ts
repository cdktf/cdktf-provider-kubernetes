// https://www.terraform.io/docs/providers/kubernetes/r/job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobConfig extends cdktf.TerraformMetaArguments {
  readonly waitForCompletion?: boolean;
  /** metadata block */
  readonly metadata: JobMetadata[];
  /** spec block */
  readonly spec: JobSpec[];
  /** timeouts block */
  readonly timeouts?: JobTimeouts;
}
export interface JobMetadata {
  /** An unstructured key value map stored with the job that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the job. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the job, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the job must be unique. */
  readonly namespace?: string;
}

function jobMetadataToTerraform(struct?: JobMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecSelectorMatchExpressionsToTerraform(struct?: JobSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecSelectorMatchExpressions[];
}

function jobSpecSelectorToTerraform(struct?: JobSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateMetadata {
  /** An unstructured key value map stored with the job that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the job. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the job, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

function jobSpecTemplateMetadataToTerraform(struct?: JobSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight is in the range 1-100 */
  readonly weight: number;
  /** preference block */
  readonly preference: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}

function jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform)(struct!.preference),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** node_selector_term block */
  readonly nodeSelectorTerm?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface JobSpecTemplateSpecAffinityNodeAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function jobSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: JobSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface JobSpecTemplateSpecAffinityPodAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function jobSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: JobSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface JobSpecTemplateSpecAffinityPodAntiAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: JobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function jobSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: JobSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface JobSpecTemplateSpecAffinity {
  /** node_affinity block */
  readonly nodeAffinity?: JobSpecTemplateSpecAffinityNodeAffinity[];
  /** pod_affinity block */
  readonly podAffinity?: JobSpecTemplateSpecAffinityPodAffinity[];
  /** pod_anti_affinity block */
  readonly podAntiAffinity?: JobSpecTemplateSpecAffinityPodAntiAffinity[];
}

function jobSpecTemplateSpecAffinityToTerraform(struct?: JobSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_affinity: cdktf.listMapper(jobSpecTemplateSpecAffinityNodeAffinityToTerraform)(struct!.nodeAffinity),
    pod_affinity: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAffinityToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.listMapper(jobSpecTemplateSpecAffinityPodAntiAffinityToTerraform)(struct!.podAntiAffinity),
  }
}

export interface JobSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function jobSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface JobSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function jobSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface JobSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: JobSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: JobSpecTemplateSpecContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: JobSpecTemplateSpecContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: JobSpecTemplateSpecContainerEnvValueFromSecretKeyRef[];
}

function jobSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: JobSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface JobSpecTemplateSpecContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: JobSpecTemplateSpecContainerEnvValueFrom[];
}

function jobSpecTemplateSpecContainerEnvToTerraform(struct?: JobSpecTemplateSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(jobSpecTemplateSpecContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface JobSpecTemplateSpecContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: JobSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: JobSpecTemplateSpecContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: JobSpecTemplateSpecContainerEnvFromSecretRef[];
}

function jobSpecTemplateSpecContainerEnvFromToTerraform(struct?: JobSpecTemplateSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(jobSpecTemplateSpecContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function jobSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: JobSpecTemplateSpecContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}

function jobSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function jobSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: JobSpecTemplateSpecContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}

function jobSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: JobSpecTemplateSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecContainerLifecycle {
  /** post_start block */
  readonly postStart?: JobSpecTemplateSpecContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: JobSpecTemplateSpecContainerLifecyclePreStop[];
}

function jobSpecTemplateSpecContainerLifecycleToTerraform(struct?: JobSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(jobSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface JobSpecTemplateSpecContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: JobSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecContainerLivenessProbe {
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
  readonly exec?: JobSpecTemplateSpecContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}

function jobSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: JobSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecContainerPort {
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

function jobSpecTemplateSpecContainerPortToTerraform(struct?: JobSpecTemplateSpecContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface JobSpecTemplateSpecContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: JobSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecContainerReadinessProbe {
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
  readonly exec?: JobSpecTemplateSpecContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}

function jobSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: JobSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecContainerResources {
  /** Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly requests?: { [key: string]: string };
}

function jobSpecTemplateSpecContainerResourcesToTerraform(struct?: JobSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface JobSpecTemplateSpecContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function jobSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: JobSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface JobSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function jobSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: JobSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface JobSpecTemplateSpecContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: string;
  /** capabilities block */
  readonly capabilities?: JobSpecTemplateSpecContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: JobSpecTemplateSpecContainerSecurityContextSeLinuxOptions[];
}

function jobSpecTemplateSpecContainerSecurityContextToTerraform(struct?: JobSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(jobSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(jobSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface JobSpecTemplateSpecContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: JobSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecContainerStartupProbe {
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
  readonly exec?: JobSpecTemplateSpecContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecContainerStartupProbeTcpSocket[];
}

function jobSpecTemplateSpecContainerStartupProbeToTerraform(struct?: JobSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecContainerVolumeMount {
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

function jobSpecTemplateSpecContainerVolumeMountToTerraform(struct?: JobSpecTemplateSpecContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface JobSpecTemplateSpecContainer {
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
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: JobSpecTemplateSpecContainerEnv[];
  /** env_from block */
  readonly envFrom?: JobSpecTemplateSpecContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: JobSpecTemplateSpecContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: JobSpecTemplateSpecContainerLivenessProbe[];
  /** port block */
  readonly port?: JobSpecTemplateSpecContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: JobSpecTemplateSpecContainerReadinessProbe[];
  /** resources block */
  readonly resources?: JobSpecTemplateSpecContainerResources[];
  /** security_context block */
  readonly securityContext?: JobSpecTemplateSpecContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: JobSpecTemplateSpecContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: JobSpecTemplateSpecContainerVolumeMount[];
}

function jobSpecTemplateSpecContainerToTerraform(struct?: JobSpecTemplateSpecContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(jobSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(jobSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(jobSpecTemplateSpecContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(jobSpecTemplateSpecContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(jobSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(jobSpecTemplateSpecContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(jobSpecTemplateSpecContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(jobSpecTemplateSpecContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(jobSpecTemplateSpecContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(jobSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface JobSpecTemplateSpecDnsConfigOption {
  /** Name of the option. */
  readonly name: string;
  /** Value of the option. Optional: Defaults to empty. */
  readonly value?: string;
}

function jobSpecTemplateSpecDnsConfigOptionToTerraform(struct?: JobSpecTemplateSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecDnsConfig {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly nameservers?: string[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly searches?: string[];
  /** option block */
  readonly option?: JobSpecTemplateSpecDnsConfigOption[];
}

function jobSpecTemplateSpecDnsConfigToTerraform(struct?: JobSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(jobSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export interface JobSpecTemplateSpecHostAliases {
  /** Hostnames for the IP address. */
  readonly hostnames: string[];
  /** IP address of the host file entry. */
  readonly ip: string;
}

function jobSpecTemplateSpecHostAliasesToTerraform(struct?: JobSpecTemplateSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface JobSpecTemplateSpecImagePullSecrets {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}

function jobSpecTemplateSpecImagePullSecretsToTerraform(struct?: JobSpecTemplateSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function jobSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function jobSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: JobSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: JobSpecTemplateSpecInitContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: JobSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: JobSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef[];
}

function jobSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface JobSpecTemplateSpecInitContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: JobSpecTemplateSpecInitContainerEnvValueFrom[];
}

function jobSpecTemplateSpecInitContainerEnvToTerraform(struct?: JobSpecTemplateSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function jobSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface JobSpecTemplateSpecInitContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: JobSpecTemplateSpecInitContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: JobSpecTemplateSpecInitContainerEnvFromSecretRef[];
}

function jobSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: JobSpecTemplateSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function jobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: JobSpecTemplateSpecInitContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecInitContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}

function jobSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function jobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: JobSpecTemplateSpecInitContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecInitContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}

function jobSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecInitContainerLifecycle {
  /** post_start block */
  readonly postStart?: JobSpecTemplateSpecInitContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: JobSpecTemplateSpecInitContainerLifecyclePreStop[];
}

function jobSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: JobSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface JobSpecTemplateSpecInitContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: JobSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecInitContainerLivenessProbe {
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
  readonly exec?: JobSpecTemplateSpecInitContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecInitContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}

function jobSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: JobSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecInitContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecInitContainerPort {
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

function jobSpecTemplateSpecInitContainerPortToTerraform(struct?: JobSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface JobSpecTemplateSpecInitContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: JobSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecInitContainerReadinessProbe {
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
  readonly exec?: JobSpecTemplateSpecInitContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecInitContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}

function jobSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: JobSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecInitContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecInitContainerResources {
  /** Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly requests?: { [key: string]: string };
}

function jobSpecTemplateSpecInitContainerResourcesToTerraform(struct?: JobSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface JobSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function jobSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: JobSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface JobSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function jobSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: JobSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface JobSpecTemplateSpecInitContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: string;
  /** capabilities block */
  readonly capabilities?: JobSpecTemplateSpecInitContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: JobSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions[];
}

function jobSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: JobSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(jobSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(jobSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface JobSpecTemplateSpecInitContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function jobSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: JobSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface JobSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function jobSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: JobSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: JobSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function jobSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: JobSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(jobSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface JobSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function jobSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: JobSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface JobSpecTemplateSpecInitContainerStartupProbe {
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
  readonly exec?: JobSpecTemplateSpecInitContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: JobSpecTemplateSpecInitContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: JobSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}

function jobSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: JobSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(jobSpecTemplateSpecInitContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(jobSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(jobSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface JobSpecTemplateSpecInitContainerVolumeMount {
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

function jobSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: JobSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface JobSpecTemplateSpecInitContainer {
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
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: JobSpecTemplateSpecInitContainerEnv[];
  /** env_from block */
  readonly envFrom?: JobSpecTemplateSpecInitContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: JobSpecTemplateSpecInitContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: JobSpecTemplateSpecInitContainerLivenessProbe[];
  /** port block */
  readonly port?: JobSpecTemplateSpecInitContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: JobSpecTemplateSpecInitContainerReadinessProbe[];
  /** resources block */
  readonly resources?: JobSpecTemplateSpecInitContainerResources[];
  /** security_context block */
  readonly securityContext?: JobSpecTemplateSpecInitContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: JobSpecTemplateSpecInitContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: JobSpecTemplateSpecInitContainerVolumeMount[];
}

function jobSpecTemplateSpecInitContainerToTerraform(struct?: JobSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(jobSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(jobSpecTemplateSpecInitContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(jobSpecTemplateSpecInitContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(jobSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(jobSpecTemplateSpecInitContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(jobSpecTemplateSpecInitContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(jobSpecTemplateSpecInitContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(jobSpecTemplateSpecInitContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(jobSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface JobSpecTemplateSpecReadinessGate {
  /** refers to a condition in the pod's condition list with matching type. */
  readonly conditionType: string;
}

function jobSpecTemplateSpecReadinessGateToTerraform(struct?: JobSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface JobSpecTemplateSpecSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function jobSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: JobSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface JobSpecTemplateSpecSecurityContextSysctl {
  /** Name of a property to set. */
  readonly name: string;
  /** Value of a property to set. */
  readonly value: string;
}

function jobSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: JobSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecSecurityContext {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly fsGroup?: string;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsUser?: string;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container. */
  readonly supplementalGroups?: number[];
  /** se_linux_options block */
  readonly seLinuxOptions?: JobSpecTemplateSpecSecurityContextSeLinuxOptions[];
  /** sysctl block */
  readonly sysctl?: JobSpecTemplateSpecSecurityContextSysctl[];
}

function jobSpecTemplateSpecSecurityContextToTerraform(struct?: JobSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_group: cdktf.stringToTerraform(struct!.fsGroup),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: cdktf.listMapper(jobSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(jobSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export interface JobSpecTemplateSpecToleration {
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

function jobSpecTemplateSpecTolerationToTerraform(struct?: JobSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface JobSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function jobSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: JobSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface JobSpecTemplateSpecTopologySpreadConstraintLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: JobSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions[];
}

function jobSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: JobSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(jobSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface JobSpecTemplateSpecTopologySpreadConstraint {
  /** describes the degree to which pods may be unevenly distributed. */
  readonly maxSkew?: number;
  /** the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. */
  readonly topologyKey?: string;
  /** indicates how to deal with a pod if it doesn't satisfy the spread constraint. */
  readonly whenUnsatisfiable?: string;
  /** label_selector block */
  readonly labelSelector?: JobSpecTemplateSpecTopologySpreadConstraintLabelSelector[];
}

function jobSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: JobSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(jobSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface JobSpecTemplateSpecVolumeAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}

function jobSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: JobSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface JobSpecTemplateSpecVolumeAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}

function jobSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: JobSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface JobSpecTemplateSpecVolumeAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}

function jobSpecTemplateSpecVolumeAzureFileToTerraform(struct?: JobSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface JobSpecTemplateSpecVolumeCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeCephFs {
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
  readonly secretRef?: JobSpecTemplateSpecVolumeCephFsSecretRef[];
}

function jobSpecTemplateSpecVolumeCephFsToTerraform(struct?: JobSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface JobSpecTemplateSpecVolumeCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}

function jobSpecTemplateSpecVolumeCinderToTerraform(struct?: JobSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface JobSpecTemplateSpecVolumeConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function jobSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: JobSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeConfigMap {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or its keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeConfigMapItems[];
}

function jobSpecTemplateSpecVolumeConfigMapToTerraform(struct?: JobSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeCsi {
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
  readonly controllerExpandSecretRef?: JobSpecTemplateSpecVolumeCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: JobSpecTemplateSpecVolumeCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: JobSpecTemplateSpecVolumeCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: JobSpecTemplateSpecVolumeCsiNodeStageSecretRef[];
}

function jobSpecTemplateSpecVolumeCsiToTerraform(struct?: JobSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface JobSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function jobSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: JobSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface JobSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function jobSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: JobSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface JobSpecTemplateSpecVolumeDownwardApiItems {
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef: JobSpecTemplateSpecVolumeDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: JobSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef[];
}

function jobSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: JobSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface JobSpecTemplateSpecVolumeDownwardApi {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeDownwardApiItems[];
}

function jobSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: JobSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeEmptyDir {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly medium?: string;
  /** Total amount of local storage required for this EmptyDir volume. */
  readonly sizeLimit?: string;
}

function jobSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: JobSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export interface JobSpecTemplateSpecVolumeFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}

function jobSpecTemplateSpecVolumeFcToTerraform(struct?: JobSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface JobSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: JobSpecTemplateSpecVolumeFlexVolumeSecretRef[];
}

function jobSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: JobSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface JobSpecTemplateSpecVolumeFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}

function jobSpecTemplateSpecVolumeFlockerToTerraform(struct?: JobSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface JobSpecTemplateSpecVolumeGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}

function jobSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: JobSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface JobSpecTemplateSpecVolumeGitRepo {
  /** Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly directory?: string;
  /** Repository URL */
  readonly repository?: string;
  /** Commit hash for the specified revision. */
  readonly revision?: string;
}

function jobSpecTemplateSpecVolumeGitRepoToTerraform(struct?: JobSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export interface JobSpecTemplateSpecVolumeGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}

function jobSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: JobSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface JobSpecTemplateSpecVolumeHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}

function jobSpecTemplateSpecVolumeHostPathToTerraform(struct?: JobSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface JobSpecTemplateSpecVolumeIscsi {
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

function jobSpecTemplateSpecVolumeIscsiToTerraform(struct?: JobSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export interface JobSpecTemplateSpecVolumeLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}

function jobSpecTemplateSpecVolumeLocalToTerraform(struct?: JobSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}

function jobSpecTemplateSpecVolumeNfsToTerraform(struct?: JobSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface JobSpecTemplateSpecVolumePersistentVolumeClaim {
  /** ClaimName is the name of a PersistentVolumeClaim in the same  */
  readonly claimName?: string;
  /** Will force the ReadOnly setting in VolumeMounts. */
  readonly readOnly?: boolean;
}

function jobSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: JobSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface JobSpecTemplateSpecVolumePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}

function jobSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: JobSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function jobSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[];
}

function jobSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to 'v1'. */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /** Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef[];
}

function jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[];
}

function jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function jobSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesSecret {
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly name?: string;
  /** Optional: Specify whether the Secret or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeProjectedSourcesSecretItems[];
}

function jobSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /** Audience is the intended audience of the token */
  readonly audience?: string;
  /** ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds). */
  readonly expirationSeconds?: number;
  /** Path specifies a relative path to the mount point of the projected volume. */
  readonly path: string;
}

function jobSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeProjectedSources {
  /** config_map block */
  readonly configMap?: JobSpecTemplateSpecVolumeProjectedSourcesConfigMap[];
  /** downward_api block */
  readonly downwardApi?: JobSpecTemplateSpecVolumeProjectedSourcesDownwardApi[];
  /** secret block */
  readonly secret?: JobSpecTemplateSpecVolumeProjectedSourcesSecret[];
  /** service_account_token block */
  readonly serviceAccountToken?: JobSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken[];
}

function jobSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: JobSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform)(struct!.downwardApi),
    secret: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform)(struct!.serviceAccountToken),
  }
}

export interface JobSpecTemplateSpecVolumeProjected {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** sources block */
  readonly sources: JobSpecTemplateSpecVolumeProjectedSources[];
}

function jobSpecTemplateSpecVolumeProjectedToTerraform(struct?: JobSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface JobSpecTemplateSpecVolumeQuobyte {
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

function jobSpecTemplateSpecVolumeQuobyteToTerraform(struct?: JobSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface JobSpecTemplateSpecVolumeRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function jobSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: JobSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface JobSpecTemplateSpecVolumeRbd {
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
  readonly secretRef?: JobSpecTemplateSpecVolumeRbdSecretRef[];
}

function jobSpecTemplateSpecVolumeRbdToTerraform(struct?: JobSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(jobSpecTemplateSpecVolumeRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface JobSpecTemplateSpecVolumeSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function jobSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: JobSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface JobSpecTemplateSpecVolumeSecret {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Optional: Specify whether the Secret or its keys must be defined. */
  readonly optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly secretName?: string;
  /** items block */
  readonly items?: JobSpecTemplateSpecVolumeSecretItems[];
}

function jobSpecTemplateSpecVolumeSecretToTerraform(struct?: JobSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(jobSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export interface JobSpecTemplateSpecVolumeVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}

function jobSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: JobSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface JobSpecTemplateSpecVolume {
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: JobSpecTemplateSpecVolumeAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: JobSpecTemplateSpecVolumeAzureDisk[];
  /** azure_file block */
  readonly azureFile?: JobSpecTemplateSpecVolumeAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: JobSpecTemplateSpecVolumeCephFs[];
  /** cinder block */
  readonly cinder?: JobSpecTemplateSpecVolumeCinder[];
  /** config_map block */
  readonly configMap?: JobSpecTemplateSpecVolumeConfigMap[];
  /** csi block */
  readonly csi?: JobSpecTemplateSpecVolumeCsi[];
  /** downward_api block */
  readonly downwardApi?: JobSpecTemplateSpecVolumeDownwardApi[];
  /** empty_dir block */
  readonly emptyDir?: JobSpecTemplateSpecVolumeEmptyDir[];
  /** fc block */
  readonly fc?: JobSpecTemplateSpecVolumeFc[];
  /** flex_volume block */
  readonly flexVolume?: JobSpecTemplateSpecVolumeFlexVolume[];
  /** flocker block */
  readonly flocker?: JobSpecTemplateSpecVolumeFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: JobSpecTemplateSpecVolumeGcePersistentDisk[];
  /** git_repo block */
  readonly gitRepo?: JobSpecTemplateSpecVolumeGitRepo[];
  /** glusterfs block */
  readonly glusterfs?: JobSpecTemplateSpecVolumeGlusterfs[];
  /** host_path block */
  readonly hostPath?: JobSpecTemplateSpecVolumeHostPath[];
  /** iscsi block */
  readonly iscsi?: JobSpecTemplateSpecVolumeIscsi[];
  /** local block */
  readonly local?: JobSpecTemplateSpecVolumeLocal[];
  /** nfs block */
  readonly nfs?: JobSpecTemplateSpecVolumeNfs[];
  /** persistent_volume_claim block */
  readonly persistentVolumeClaim?: JobSpecTemplateSpecVolumePersistentVolumeClaim[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: JobSpecTemplateSpecVolumePhotonPersistentDisk[];
  /** projected block */
  readonly projected?: JobSpecTemplateSpecVolumeProjected[];
  /** quobyte block */
  readonly quobyte?: JobSpecTemplateSpecVolumeQuobyte[];
  /** rbd block */
  readonly rbd?: JobSpecTemplateSpecVolumeRbd[];
  /** secret block */
  readonly secret?: JobSpecTemplateSpecVolumeSecret[];
  /** vsphere_volume block */
  readonly vsphereVolume?: JobSpecTemplateSpecVolumeVsphereVolume[];
}

function jobSpecTemplateSpecVolumeToTerraform(struct?: JobSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: cdktf.listMapper(jobSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(jobSpecTemplateSpecVolumeAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(jobSpecTemplateSpecVolumeAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(jobSpecTemplateSpecVolumeCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(jobSpecTemplateSpecVolumeCinderToTerraform)(struct!.cinder),
    config_map: cdktf.listMapper(jobSpecTemplateSpecVolumeConfigMapToTerraform)(struct!.configMap),
    csi: cdktf.listMapper(jobSpecTemplateSpecVolumeCsiToTerraform)(struct!.csi),
    downward_api: cdktf.listMapper(jobSpecTemplateSpecVolumeDownwardApiToTerraform)(struct!.downwardApi),
    empty_dir: cdktf.listMapper(jobSpecTemplateSpecVolumeEmptyDirToTerraform)(struct!.emptyDir),
    fc: cdktf.listMapper(jobSpecTemplateSpecVolumeFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(jobSpecTemplateSpecVolumeFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(jobSpecTemplateSpecVolumeFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(jobSpecTemplateSpecVolumeGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    git_repo: cdktf.listMapper(jobSpecTemplateSpecVolumeGitRepoToTerraform)(struct!.gitRepo),
    glusterfs: cdktf.listMapper(jobSpecTemplateSpecVolumeGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(jobSpecTemplateSpecVolumeHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(jobSpecTemplateSpecVolumeIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(jobSpecTemplateSpecVolumeLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(jobSpecTemplateSpecVolumeNfsToTerraform)(struct!.nfs),
    persistent_volume_claim: cdktf.listMapper(jobSpecTemplateSpecVolumePersistentVolumeClaimToTerraform)(struct!.persistentVolumeClaim),
    photon_persistent_disk: cdktf.listMapper(jobSpecTemplateSpecVolumePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(jobSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: cdktf.listMapper(jobSpecTemplateSpecVolumeQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(jobSpecTemplateSpecVolumeRbdToTerraform)(struct!.rbd),
    secret: cdktf.listMapper(jobSpecTemplateSpecVolumeSecretToTerraform)(struct!.secret),
    vsphere_volume: cdktf.listMapper(jobSpecTemplateSpecVolumeVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface JobSpecTemplateSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly automountServiceAccountToken?: boolean;
  /** Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy). */
  readonly dnsPolicy?: string;
  /** Enables generating environment variables for service discovery. Defaults to true. */
  readonly enableServiceLinks?: boolean;
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
  readonly affinity?: JobSpecTemplateSpecAffinity[];
  /** container block */
  readonly container?: JobSpecTemplateSpecContainer[];
  /** dns_config block */
  readonly dnsConfig?: JobSpecTemplateSpecDnsConfig[];
  /** host_aliases block */
  readonly hostAliases?: JobSpecTemplateSpecHostAliases[];
  /** image_pull_secrets block */
  readonly imagePullSecrets?: JobSpecTemplateSpecImagePullSecrets[];
  /** init_container block */
  readonly initContainer?: JobSpecTemplateSpecInitContainer[];
  /** readiness_gate block */
  readonly readinessGate?: JobSpecTemplateSpecReadinessGate[];
  /** security_context block */
  readonly securityContext?: JobSpecTemplateSpecSecurityContext[];
  /** toleration block */
  readonly toleration?: JobSpecTemplateSpecToleration[];
  /** topology_spread_constraint block */
  readonly topologySpreadConstraint?: JobSpecTemplateSpecTopologySpreadConstraint[];
  /** volume block */
  readonly volume?: JobSpecTemplateSpecVolume[];
}

function jobSpecTemplateSpecToTerraform(struct?: JobSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: cdktf.listMapper(jobSpecTemplateSpecAffinityToTerraform)(struct!.affinity),
    container: cdktf.listMapper(jobSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: cdktf.listMapper(jobSpecTemplateSpecDnsConfigToTerraform)(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(jobSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(jobSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(jobSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(jobSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: cdktf.listMapper(jobSpecTemplateSpecSecurityContextToTerraform)(struct!.securityContext),
    toleration: cdktf.listMapper(jobSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(jobSpecTemplateSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(jobSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export interface JobSpecTemplate {
  /** metadata block */
  readonly metadata: JobSpecTemplateMetadata[];
  /** spec block */
  readonly spec?: JobSpecTemplateSpec[];
}

function jobSpecTemplateToTerraform(struct?: JobSpecTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.listMapper(jobSpecTemplateMetadataToTerraform)(struct!.metadata),
    spec: cdktf.listMapper(jobSpecTemplateSpecToTerraform)(struct!.spec),
  }
}

export interface JobSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** Specifies the number of retries before marking this job failed. Defaults to 6 */
  readonly backoffLimit?: number;
  /** Specifies the desired number of successfully finished pods the job should be run with. Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value. Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly completions?: number;
  /** Controls generation of pod labels and pod selectors. Leave unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template. When true, the user is responsible for picking unique labels and specifying the selector. Failure to pick a unique label may cause this and other jobs to not function correctly. More info: https://git.k8s.io/community/contributors/design-proposals/selector-generation.md */
  readonly manualSelector?: boolean;
  /** Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly parallelism?: number;
  /** ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. */
  readonly ttlSecondsAfterFinished?: string;
  /** selector block */
  readonly selector?: JobSpecSelector[];
  /** template block */
  readonly template: JobSpecTemplate[];
}

function jobSpecToTerraform(struct?: JobSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    completions: cdktf.numberToTerraform(struct!.completions),
    manual_selector: cdktf.booleanToTerraform(struct!.manualSelector),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    ttl_seconds_after_finished: cdktf.stringToTerraform(struct!.ttlSecondsAfterFinished),
    selector: cdktf.listMapper(jobSpecSelectorToTerraform)(struct!.selector),
    template: cdktf.listMapper(jobSpecTemplateToTerraform)(struct!.template),
  }
}

export interface JobTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function jobTimeoutsToTerraform(struct?: JobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Job extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: JobConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_job',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForCompletion = config.waitForCompletion;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean;
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean ) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: JobMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: JobMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: JobSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: JobSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: JobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: JobTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      metadata: cdktf.listMapper(jobMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(jobSpecToTerraform)(this._spec),
      timeouts: jobTimeoutsToTerraform(this._timeouts),
    };
  }
}
