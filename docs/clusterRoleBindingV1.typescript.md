# `clusterRoleBindingV1` Submodule <a name="`clusterRoleBindingV1` Submodule" id="@cdktf/provider-kubernetes.clusterRoleBindingV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoleBindingV1 <a name="ClusterRoleBindingV1" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1 kubernetes_cluster_role_binding_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

new clusterRoleBindingV1.ClusterRoleBindingV1(scope: Construct, id: string, config: ClusterRoleBindingV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config">ClusterRoleBindingV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config">ClusterRoleBindingV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef">putRoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata"></a>

```typescript
public putMetadata(value: ClusterRoleBindingV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---

##### `putRoleRef` <a name="putRoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef"></a>

```typescript
public putRoleRef(value: ClusterRoleBindingV1RoleRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject"></a>

```typescript
public putSubject(value: IResolvable | ClusterRoleBindingV1Subject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterRoleBindingV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClusterRoleBindingV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClusterRoleBindingV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClusterRoleBindingV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClusterRoleBindingV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef">roleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput">roleRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput">subjectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata"></a>

```typescript
public readonly metadata: ClusterRoleBindingV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a>

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef"></a>

```typescript
public readonly roleRef: ClusterRoleBindingV1RoleRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject"></a>

```typescript
public readonly subject: ClusterRoleBindingV1SubjectList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: ClusterRoleBindingV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---

##### `roleRefInput`<sup>Optional</sup> <a name="roleRefInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput"></a>

```typescript
public readonly roleRefInput: ClusterRoleBindingV1RoleRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput"></a>

```typescript
public readonly subjectInput: IResolvable | ClusterRoleBindingV1Subject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleBindingV1Config <a name="ClusterRoleBindingV1Config" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

const clusterRoleBindingV1Config: clusterRoleBindingV1.ClusterRoleBindingV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef">roleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject">subject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]</code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata"></a>

```typescript
public readonly metadata: ClusterRoleBindingV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#metadata ClusterRoleBindingV1#metadata}

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef"></a>

```typescript
public readonly roleRef: ClusterRoleBindingV1RoleRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#role_ref ClusterRoleBindingV1#role_ref}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject"></a>

```typescript
public readonly subject: IResolvable | ClusterRoleBindingV1Subject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#subject ClusterRoleBindingV1#subject}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ClusterRoleBindingV1Metadata <a name="ClusterRoleBindingV1Metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

const clusterRoleBindingV1Metadata: clusterRoleBindingV1.ClusterRoleBindingV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#annotations ClusterRoleBindingV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#generate_name ClusterRoleBindingV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#labels ClusterRoleBindingV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1RoleRef <a name="ClusterRoleBindingV1RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

const clusterRoleBindingV1RoleRef: clusterRoleBindingV1.ClusterRoleBindingV1RoleRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup">apiGroup</a></code> | <code>string</code> | The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind">kind</a></code> | <code>string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name">name</a></code> | <code>string</code> | The name of the User to bind to. |

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1Subject <a name="ClusterRoleBindingV1Subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

const clusterRoleBindingV1Subject: clusterRoleBindingV1.ClusterRoleBindingV1Subject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind">kind</a></code> | <code>string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name">name</a></code> | <code>string</code> | The name of the resource to bind to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup">apiGroup</a></code> | <code>string</code> | The API group of the subject resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace">namespace</a></code> | <code>string</code> | The Namespace of the subject resource. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

##### `apiGroup`<sup>Optional</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The API group of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/cluster_role_binding_v1#namespace ClusterRoleBindingV1#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleBindingV1MetadataOutputReference <a name="ClusterRoleBindingV1MetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

new clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterRoleBindingV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---


### ClusterRoleBindingV1RoleRefOutputReference <a name="ClusterRoleBindingV1RoleRefOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

new clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput">apiGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup">apiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGroupInput`<sup>Optional</sup> <a name="apiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput"></a>

```typescript
public readonly apiGroupInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterRoleBindingV1RoleRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---


### ClusterRoleBindingV1SubjectList <a name="ClusterRoleBindingV1SubjectList" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

new clusterRoleBindingV1.ClusterRoleBindingV1SubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get"></a>

```typescript
public get(index: number): ClusterRoleBindingV1SubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleBindingV1Subject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>[]

---


### ClusterRoleBindingV1SubjectOutputReference <a name="ClusterRoleBindingV1SubjectOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer"></a>

```typescript
import { clusterRoleBindingV1 } from '@cdktf/provider-kubernetes'

new clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup">resetApiGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiGroup` <a name="resetApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup"></a>

```typescript
public resetApiGroup(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput">apiGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup">apiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGroupInput`<sup>Optional</sup> <a name="apiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput"></a>

```typescript
public readonly apiGroupInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleBindingV1Subject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject">ClusterRoleBindingV1Subject</a>

---



