# `data_kubernetes_persistent_volume_claim_v1`

Refer to the Terraform Registory for docs: [`data_kubernetes_persistent_volume_claim_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1).

# `dataKubernetesPersistentVolumeClaimV1` Submodule <a name="`dataKubernetesPersistentVolumeClaimV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesPersistentVolumeClaimV1 <a name="DataKubernetesPersistentVolumeClaimV1" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1(scope: Construct, id: string, config: DataKubernetesPersistentVolumeClaimV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config">DataKubernetesPersistentVolumeClaimV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config">DataKubernetesPersistentVolumeClaimV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata"></a>

```typescript
public putMetadata(value: DataKubernetesPersistentVolumeClaimV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec"></a>

```typescript
public putSpec(value: IResolvable | DataKubernetesPersistentVolumeClaimV1Spec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesPersistentVolumeClaimV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesPersistentVolumeClaimV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesPersistentVolumeClaimV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference">DataKubernetesPersistentVolumeClaimV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList">DataKubernetesPersistentVolumeClaimV1SpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.specInput">specInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesPersistentVolumeClaimV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference">DataKubernetesPersistentVolumeClaimV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.spec"></a>

```typescript
public readonly spec: DataKubernetesPersistentVolumeClaimV1SpecList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList">DataKubernetesPersistentVolumeClaimV1SpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: DataKubernetesPersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | DataKubernetesPersistentVolumeClaimV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesPersistentVolumeClaimV1Config <a name="DataKubernetesPersistentVolumeClaimV1Config" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1Config: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.spec">spec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]</code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesPersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#metadata DataKubernetesPersistentVolumeClaimV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.spec"></a>

```typescript
public readonly spec: IResolvable | DataKubernetesPersistentVolumeClaimV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#spec DataKubernetesPersistentVolumeClaimV1#spec}

---

### DataKubernetesPersistentVolumeClaimV1Metadata <a name="DataKubernetesPersistentVolumeClaimV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1Metadata: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#annotations DataKubernetesPersistentVolumeClaimV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#generate_name DataKubernetesPersistentVolumeClaimV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#labels DataKubernetesPersistentVolumeClaimV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#name DataKubernetesPersistentVolumeClaimV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#namespace DataKubernetesPersistentVolumeClaimV1#namespace}

---

### DataKubernetesPersistentVolumeClaimV1Spec <a name="DataKubernetesPersistentVolumeClaimV1Spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1Spec: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.selector">selector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]</code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.storageClassName">storageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeName">volumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.selector"></a>

```typescript
public readonly selector: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#selector DataKubernetesPersistentVolumeClaimV1#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#storage_class_name DataKubernetesPersistentVolumeClaimV1#storage_class_name}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#volume_name DataKubernetesPersistentVolumeClaimV1#volume_name}

---

### DataKubernetesPersistentVolumeClaimV1SpecResources <a name="DataKubernetesPersistentVolumeClaimV1SpecResources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1SpecResources: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources = { ... }
```


### DataKubernetesPersistentVolumeClaimV1SpecSelector <a name="DataKubernetesPersistentVolumeClaimV1SpecSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1SpecSelector: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#match_expressions DataKubernetesPersistentVolumeClaimV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#match_labels DataKubernetesPersistentVolumeClaimV1#match_labels}

---

### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions: dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#key DataKubernetesPersistentVolumeClaimV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#operator DataKubernetesPersistentVolumeClaimV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/data-sources/persistent_volume_claim_v1#values DataKubernetesPersistentVolumeClaimV1#values}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesPersistentVolumeClaimV1MetadataOutputReference <a name="DataKubernetesPersistentVolumeClaimV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesPersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecList <a name="DataKubernetesPersistentVolumeClaimV1SpecList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimV1SpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>[]

---


### DataKubernetesPersistentVolumeClaimV1SpecOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector"></a>

```typescript
public putSelector(value: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList">DataKubernetesPersistentVolumeClaimV1SpecResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList">DataKubernetesPersistentVolumeClaimV1SpecSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.resources"></a>

```typescript
public readonly resources: DataKubernetesPersistentVolumeClaimV1SpecResourcesList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList">DataKubernetesPersistentVolumeClaimV1SpecResourcesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selector"></a>

```typescript
public readonly selector: DataKubernetesPersistentVolumeClaimV1SpecSelectorList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList">DataKubernetesPersistentVolumeClaimV1SpecSelectorList</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1Spec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecResourcesList <a name="DataKubernetesPersistentVolumeClaimV1SpecResourcesList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.limits">limits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.requests">requests</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources">DataKubernetesPersistentVolumeClaimV1SpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesPersistentVolumeClaimV1SpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources">DataKubernetesPersistentVolumeClaimV1SpecResources</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorList <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>[]

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimV1SpecSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>

---



