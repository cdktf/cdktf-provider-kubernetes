/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { JobV1Metadata, 
jobV1MetadataToTerraform, 
jobV1MetadataToHclTerraform, 
JobV1MetadataOutputReference, 
JobV1Spec, 
jobV1SpecToTerraform, 
jobV1SpecToHclTerraform, 
JobV1SpecOutputReference, 
JobV1Timeouts, 
jobV1TimeoutsToTerraform, 
jobV1TimeoutsToHclTerraform, 
JobV1TimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface JobV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#id JobV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#wait_for_completion JobV1#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#metadata JobV1#metadata}
  */
  readonly metadata: JobV1Metadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#spec JobV1#spec}
  */
  readonly spec: JobV1Spec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#timeouts JobV1#timeouts}
  */
  readonly timeouts?: JobV1Timeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1 kubernetes_job_v1}
*/
export class JobV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_job_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobV1 to import
  * @param importFromId The id of the existing JobV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_job_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/job_v1 kubernetes_job_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobV1Config
  */
  public constructor(scope: Construct, id: string, config: JobV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_job_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.28.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._waitForCompletion = config.waitForCompletion;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktf.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new JobV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: JobV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new JobV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: JobV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JobV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JobV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      metadata: jobV1MetadataToTerraform(this._metadata.internalValue),
      spec: jobV1SpecToTerraform(this._spec.internalValue),
      timeouts: jobV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: jobV1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobV1MetadataList",
      },
      spec: {
        value: jobV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobV1SpecList",
      },
      timeouts: {
        value: jobV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
